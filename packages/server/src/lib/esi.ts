const USER_AGENT = 'eve-incursions.de@lars.naurath@gmail.de';
const BASE_URL = 'https://esi.evetech.net/latest';
const RETRYABLE_STATUS_CODES = new Set([408, 429, 500, 502, 503, 504]);
const MAX_RETRIES = 4;
const BASE_DELAY_MS = 1500;

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

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      const res = await fetch(`${BASE_URL}${path}`, {
        headers: { 'User-Agent': USER_AGENT }
      });

      if (res.ok) {
        return res.json() as Promise<T>;
      }

      const error = new Error(`ESI request failed: ${res.status} ${res.statusText} for ${path}`);
      lastError = error;

      const shouldRetry = RETRYABLE_STATUS_CODES.has(res.status) && attempt < MAX_RETRIES;
      if (!shouldRetry) {
        throw error;
      }

      const retryAfterMs = parseRetryAfterMs(res.headers.get('retry-after'));
      const backoffMs = retryAfterMs ?? BASE_DELAY_MS * Math.pow(2, attempt);
      console.warn(`ESI temporary failure for ${path} (${res.status}). Retrying in ${backoffMs}ms.`);
      await sleep(backoffMs);
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error));
      lastError = err;

      if (attempt >= MAX_RETRIES) {
        throw err;
      }

      const backoffMs = BASE_DELAY_MS * Math.pow(2, attempt);
      console.warn(`ESI request error for ${path}: ${err.message}. Retrying in ${backoffMs}ms.`);
      await sleep(backoffMs);
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
