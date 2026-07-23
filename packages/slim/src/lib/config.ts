import path from 'node:path';

export type DbMode = 'local' | 'supabase';

export const getDbMode = (): DbMode => {
  const value = (process.env.DB_MODE || 'local').toLowerCase();
  return value === 'supabase' ? 'supabase' : 'local';
};

export const getDbFile = () => process.env.DB_FILE || path.join(process.cwd(), 'data', 'app.db');

export const getDatabaseUrl = () => process.env.DATABASE_URL || '';

export const getDatabaseSsl = () => process.env.DATABASE_SSL === 'true' ? true : undefined;
