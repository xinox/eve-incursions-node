import type {NextApiRequest, NextApiResponse} from 'next';
import {ensureAppDataSource} from '../../../lib/data-source';
import {getLastSuccessfulSpawnSync, type SpawnSyncStatusData} from '../../../lib/sync-status';

type ErrorResponse = {error: string};

export const spawnSyncStatusHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<SpawnSyncStatusData | ErrorResponse>,
) => {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({error: 'Method not allowed'});
  }

  try {
    const source = await ensureAppDataSource();
    const lastUpdatedAt = await getLastSuccessfulSpawnSync(source);
    res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=30, stale-while-revalidate=30');
    return res.status(200).json({lastUpdatedAt});
  } catch (error) {
    console.error('Spawn sync status failed.', error);
    return res.status(500).json({error: 'Unable to load spawn sync status'});
  }
};

export default spawnSyncStatusHandler;
