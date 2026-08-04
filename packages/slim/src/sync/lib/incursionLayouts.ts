export type IncursionSystemType = 'Vanguard' | 'Assault' | 'Headquarters';

interface LayoutSystem {
  id: number;
  name: string;
}

interface WikiResponse {
  parse?: {
    wikitext?: string;
  };
}

const LAYOUT_API_URL = 'https://wiki.eveuniversity.org/api.php?action=parse&page=Constellation_layouts_for_Incursions&prop=wikitext&format=json&formatversion=2';
const USER_AGENT = 'eve-incursions.de@lars.naurath@gmail.de';
const REQUEST_TIMEOUT_MS = 5000;

let layoutWikitextPromise: Promise<string> | null = null;

const normalizeName = (value: string) => {
  try {
    return decodeURIComponent(value).replaceAll('_', ' ').trim().toLocaleLowerCase('en-US');
  } catch {
    return value.replaceAll('_', ' ').trim().toLocaleLowerCase('en-US');
  }
};

const containsSystemName = (cell: string, systemName: string) => {
  const escapedName = systemName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`(^|[^A-Za-z0-9-])${escapedName}(?=$|[^A-Za-z0-9-])`, 'i').test(cell);
};

export const parseIncursionSystemTypes = (
  wikitext: string,
  constellationName: string,
  systems: LayoutSystem[],
) => {
  const result = new Map<number, IncursionSystemType>();
  const rowBlocks = wikitext.match(/^\|-(?:[^\n]*)\r?\n[\s\S]*?(?=^\|-|^\|})/gm) ?? [];

  for (const rowBlock of rowBlocks) {
    const rowContents = rowBlock.replace(/^\|-[^\n]*\r?\n/, '');
    const cells = rowContents.split(/^\|\s?/gm).slice(1).map(cell => cell.trim());
    if (cells.length < 5) continue;

    const constellationSlug = cells[0].match(/https:\/\/evemaps\.dotlan\.net\/map\/[^/\s\]]+\/([^#\s\]]+)/)?.[1];
    if (!constellationSlug || normalizeName(constellationSlug) !== normalizeName(constellationName)) continue;

    const typedCells: Array<[IncursionSystemType, string]> = [
      ['Vanguard', cells[2]],
      ['Assault', cells[3]],
      ['Headquarters', cells[4]],
    ];

    for (const system of systems) {
      const match = typedCells.find(([, cell]) => containsSystemName(cell, system.name));
      if (match) result.set(system.id, match[0]);
    }

    break;
  }

  return result;
};

const fetchLayoutWikitext = async () => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(LAYOUT_API_URL, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': USER_AGENT,
      },
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Incursion layout request failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json() as WikiResponse;
    if (typeof data.parse?.wikitext !== 'string') {
      throw new Error('Incursion layout response did not contain wikitext');
    }

    return data.parse.wikitext;
  } finally {
    clearTimeout(timeout);
  }
};

const getLayoutWikitext = () => {
  layoutWikitextPromise ??= fetchLayoutWikitext().catch(error => {
    layoutWikitextPromise = null;
    throw error;
  });

  return layoutWikitextPromise;
};

export const fetchIncursionSystemTypes = async (constellationName: string, systems: LayoutSystem[]) => {
  const wikitext = await getLayoutWikitext();
  return parseIncursionSystemTypes(wikitext, constellationName, systems);
};
