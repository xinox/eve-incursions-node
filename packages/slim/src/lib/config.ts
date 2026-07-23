import path from 'node:path';

export type DbMode = 'local' | 'supabase';
export type DatabaseSslMode = 'verify-full' | 'require' | 'disable';

export const getDbMode = (): DbMode => {
  const value = (process.env.DB_MODE || 'local').toLowerCase();
  return value === 'supabase' ? 'supabase' : 'local';
};

export const getDbFile = () => process.env.DB_FILE || path.join(process.cwd(), 'data', 'app.db');

export const getDatabaseUrl = () => process.env.DATABASE_URL || '';

export const getDbSynchronize = () => {
  if (process.env.DB_SYNCHRONIZE) {
    return process.env.DB_SYNCHRONIZE.toLowerCase() === 'true';
  }

  return getDbMode() === 'local';
};

export const getDatabasePoolMax = () => {
  const value = Number(process.env.DATABASE_POOL_MAX || 1);
  return Number.isFinite(value) && value > 0 ? value : 1;
};

export const getDatabaseSslMode = (): DatabaseSslMode | undefined => {
  const value = process.env.DATABASE_SSL?.toLowerCase();
  if (value === 'verify-full' || value === 'require' || value === 'disable') {
    return value;
  }

  return undefined;
};
