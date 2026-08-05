import type {NextApiRequest, NextApiResponse} from 'next';
import type {ActiveSpawnsQuery} from '../../../lib/graphql';
import {getActiveSpawns} from '../../../lib/db';

type ErrorResponse = {error: string};

export const currentSpawnsHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<ActiveSpawnsQuery | ErrorResponse>,
) => {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({error: 'Method not allowed'});
  }

  try {
    const data = await getActiveSpawns();
    res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=30, stale-while-revalidate=30');
    return res.status(200).json(data);
  } catch (error) {
    console.error('Live spawn refresh failed.', error);
    return res.status(500).json({error: 'Unable to load current spawns'});
  }
};

export default currentSpawnsHandler;
