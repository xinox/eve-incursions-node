import 'reflect-metadata';
import type {NextApiRequest, NextApiResponse} from 'next';
import {ensureAppDataSource} from '../../../lib/data-source';
import {ensurePerformanceIndexes} from '../../../lib/performance-indexes';
import {updateSpawns} from '../../../sync/commands/updateSpawns';

type SyncResponse = {
  ok: boolean;
  syncedAt?: string;
  error?: string;
};

const isAuthorized = (req: NextApiRequest) => {
  const secret = process.env.CRON_SECRET;
  return process.env.NODE_ENV !== 'production' || (Boolean(secret) && req.headers.authorization === `Bearer ${secret}`);
};

export const runSpawnSync = async (req: NextApiRequest, res: NextApiResponse<SyncResponse>, influenceLogs = false) => {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ok: false, error: 'Method not allowed'});
  }

  if (!isAuthorized(req)) {
    return res.status(401).json({ok: false, error: 'Unauthorized'});
  }

  const syncLabel = influenceLogs ? 'influence' : 'spawns';
  console.log(`Cron ${syncLabel} sync started.`);

  try {
    console.log(`Cron ${syncLabel} sync initializing database.`);
    const source = await ensureAppDataSource();
    await ensurePerformanceIndexes(source);
    console.log(`Cron ${syncLabel} sync updating data.`);
    await updateSpawns(influenceLogs);
    console.log(`Cron ${syncLabel} sync revalidating homepage.`);
    await res.revalidate('/');
    console.log(`Cron ${syncLabel} sync completed.`);

    return res.status(200).json({
      ok: true,
      syncedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Spawn cron sync failed', error);
    return res.status(500).json({
      ok: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<SyncResponse>) {
  return runSpawnSync(req, res, false);
}
