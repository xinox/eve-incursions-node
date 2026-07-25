import type {NextApiRequest, NextApiResponse} from 'next';
import {runSpawnSync} from './sync-spawns';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  return runSpawnSync(req, res, true);
}
