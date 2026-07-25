const USER_AGENT = 'eve-incursions.de@lars.naurath@gmail.de';
const BASE_URL = 'https://esi.evetech.net/latest';
const RETRYABLE_STATUS_CODES = new Set([408, 429, 500, 502, 503, 504]);
const DEFAULT_MAX_RETRIES = process.env.VERCEL ? 1 : 4;
const DEFAULT_TIMEOUT_MS = process.env.VERCEL ? 3500 : 10000;
const DEFAULT_BASE_DELAY_MS = process.env.VERCEL ? 500 : 1500;

export interface ESISystem {
  system_id: number;
  name: string;
  security_status: number;
  constellation_id: number;
}

export interface ESIConstellation {
  constellation_id: number;
  name: string;
  region_id: number;
  systems: number[];
}

export interface ESIRegion {
  region_id: number;
  name: string;
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const numberFromEnv = (key: string, fallback: number) => {
  const value = Number(process.env[key]);
  return Number.isFinite(value) && value >= 0 ? value : fallback;
};

const parseRetryAfterMs = (value: string | null): number | null => {
  if (!value) return null;

  const asSeconds = Number(value);
  if (!Number.isNaN(asSeconds)) {
    return asSeconds * 1000;
  }

  const asDate = Date.parse(value);
  if (Number.isNaN(asDate)) {
    return null;
  }

  return Math.max(asDate - Date.now(), 0);
};

export async function esiRequest<T>(path: string): Promise<T> {
  let lastError: Error | null = null;
  const maxRetries = numberFromEnv('ESI_MAX_RETRIES', DEFAULT_MAX_RETRIES);
  const timeoutMs = numberFromEnv('ESI_TIMEOUT_MS', DEFAULT_TIMEOUT_MS);
  const baseDelayMs = numberFromEnv('ESI_BASE_DELAY_MS', DEFAULT_BASE_DELAY_MS);

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const res = await fetch(`${BASE_URL}${path}`, {
        headers: { 'User-Agent': USER_AGENT },
        signal: controller.signal,
      });

      if (res.ok) {
        return res.json() as Promise<T>;
      }

      const error = new Error(`ESI request failed: ${res.status} ${res.statusText} for ${path}`);
      lastError = error;

      const shouldRetry = RETRYABLE_STATUS_CODES.has(res.status) && attempt < maxRetries;
      if (!shouldRetry) {
        throw error;
      }

      const retryAfterMs = parseRetryAfterMs(res.headers.get('retry-after'));
      const backoffMs = retryAfterMs ?? baseDelayMs * Math.pow(2, attempt);
      console.warn(`ESI temporary failure for ${path} (${res.status}). Retrying in ${backoffMs}ms.`);
      await sleep(backoffMs);
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error));
      lastError = err;

      if (attempt >= maxRetries) {
        throw err;
      }

      const backoffMs = baseDelayMs * Math.pow(2, attempt);
      console.warn(`ESI request error for ${path}: ${err.message}. Retrying in ${backoffMs}ms.`);
      await sleep(backoffMs);
    } finally {
      clearTimeout(timeout);
    }
  }

  throw lastError ?? new Error(`ESI request failed for ${path}`);
}

export function fetchSystem(id: number) {
  return esiRequest<ESISystem>(`/universe/systems/${id}/`);
}

export function fetchConstellation(id: number) {
  return esiRequest<ESIConstellation>(`/universe/constellations/${id}/`);
}

export function fetchRegion(id: number) {
  return esiRequest<ESIRegion>(`/universe/regions/${id}/`);
}
