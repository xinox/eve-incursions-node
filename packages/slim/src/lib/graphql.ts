export type Station = {







  id: number;







  name: string;







  hasRepairService: boolean;







};















export type SolarSystem = {







  id: number;







  name: string;







  security: number;







  securityArea: 'high' | 'low' | 'null';







  size: number;







  type: string;







  sovereigntyHolderID: number;







  sovereigntyHolderName: string;







  stations: Station[];







};















export type Region = {







  id: number;







  name: string;







};















export type Constellation = {







  id: number;







  name: string;







  region: Region;







  systems: SolarSystem[];







};















export type Spawn = {







  id: number;







  state: string;







  active: boolean;







  boss: boolean;







  establishedAt: string;







  endedAt: string | null;







  influence: number;







  constellation: Constellation;







  stagingSystem: SolarSystem;







  influenceLogArray: number[];







  lastStateChangeDate: string;







};















export type ActiveSpawnsQuery = {







  activeSpawns: Spawn[];







  lastHighSecSpawn: {







    date: string | null;







  };







  respawnWindows: IncursionRespawnWindow[];







};















export type IncursionRespawnWindow = {
  securityArea: SolarSystem['securityArea'];
  label: string;
  totalSlots: number;
  activeSlots: number;
  missingSlots: number;
  slotIndex: number;
  slotCount: number;
  constellationName: string | null;
  regionName: string | null;
  stageSystemName: string | null;
  spawnedAt: string | null;
  endedAt: string | null;
  windowOpensAt: string | null;
  windowClosesAt: string | null;
  isEstimated: boolean;
};

export type HP = {







  total: number;







  shield: number;







  armor: number;







  structure: number;







};















export type DamageTypes = {







  kinetic: number;







  thermal: number;







  em: number;







  explosive: number;







};















export type EwarValues = {







  name: string;







  value: number;







  unit?: string | null;







};















export type Ewar = {







  id: number;







  name: string;







  values: EwarValues[];







};















export type Rat = {







  name: string;







  id: number;







  graphicId: number;







  groupId: number;







  hp: HP;







  ehp: HP;







  attackTypeId?: number | null;







  attackType?: 'Laser' | 'Missile' | null;







  attackMultiplier?: number | null;







  attackDuration?: number | null;







  attackAlpha?: number | null;







  attackTypes: DamageTypes;







  shieldResistances: DamageTypes;







  armorResistances: DamageTypes;







  structureResistances: DamageTypes;







  attackRange?: number | null;







  orbitRange: number;







  orbitSpeed: number;







  chaseSpeed: number;







  signatureRadius: number;







  scanResolution: number;







  ewar: Ewar[];







};















export type RatGroupsQuery = {







  ratGroups: {







    id: string;







    name: string;







    rats: Rat[];







  }[];







};















export type SpawnLogsQuery = {







  spawnLogs: {







    items: {







      id: number;







      state: string;







      date: string;







      spawn: Spawn;







    }[];







    total: number;







  };







};















export type ActiveCommunitiesQuery = {







  activeCommunities: {







    id: number;







    name: string;







    tag: string;







    channel: string;







    language: string;







    tank: string;







    timezone: string;







    hq: boolean;







    as: boolean;







    vg: boolean;







  }[];







};







