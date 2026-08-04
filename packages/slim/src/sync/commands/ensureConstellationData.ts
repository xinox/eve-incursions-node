import {System} from '../models/System';
import {Constellation} from '../models/Constellation';
import {Region} from '../models/Region';
import {fetchConstellation, fetchRegion, fetchSystem} from '../lib/esi';
import {AppDataSource} from '../lib/data-source';
import {In} from 'typeorm';

export const ensureConstellationData = async (constellationIds: number[], requiredSystemIds?: number[]) => {
  const uniqueIds = [...new Set(constellationIds)];

  for (const constellationId of uniqueIds) {
    try {
      await ensureConstellation(constellationId, requiredSystemIds);
    } catch (e) {
      console.error(`Failed to ensure constellation ${constellationId}:`, e);
    }
  }
};

async function ensureConstellation(constellationId: number, requiredSystemIds?: number[]) {
  let dbConstellation = await Constellation.findOneBy({id: constellationId});
  let esiConstellation;

  if (!dbConstellation) {
    esiConstellation = await fetchConstellation(constellationId);

    await ensureRegion(esiConstellation.region_id);

    dbConstellation = new Constellation();
    dbConstellation.id = constellationId;
    dbConstellation.name = esiConstellation.name;
    dbConstellation.regionId = esiConstellation.region_id;
    await dbConstellation.save();

    console.log(`Created constellation: ${esiConstellation.name} (${constellationId})`);
  }

  const systemIds: number[] = requiredSystemIds?.length
    ? [...new Set(requiredSystemIds)]
    : (esiConstellation ??= await fetchConstellation(constellationId)).systems;

  const existingSystems = systemIds.length > 0
    ? await System.find({where: {id: In(systemIds)}})
    : [];
  const existingSystemIds = new Set(existingSystems.map(system => system.id));
  const missingSystemIds = systemIds.filter(systemId => !existingSystemIds.has(systemId));

  const newSystems = (await Promise.all(missingSystemIds.map(async systemId => {
    try {
      const esiSystem = await fetchSystem(systemId);
      const dbSystem = new System();
      dbSystem.id = systemId;
      dbSystem.name = esiSystem.name;
      dbSystem.constellationId = constellationId;
      dbSystem.sovereigntyHolderID = 0;
      dbSystem.sovereigntyHolderName = '';
      dbSystem.isIsland = false;
      dbSystem.size = 0;
      dbSystem.security = esiSystem.security_status;
      dbSystem.type = 'not known';

      return dbSystem;
    } catch (e) {
      console.error(`Failed to fetch system ${systemId}:`, e);
      return null;
    }
  }))).filter((system): system is System => system !== null);

  if (newSystems.length === 0) return;

  await AppDataSource.manager.transaction(async manager => {
    await manager.save(newSystems);

    for (const system of newSystems) {
      console.log(`Created system: ${system.name} (${system.id}) sec=${system.security.toFixed(2)}`);
    }
  });
}

async function ensureRegion(regionId: number) {
  const existing = await Region.findOneBy({id: regionId});
  if (existing) return;

  const esiRegion = await fetchRegion(regionId);
  const region = new Region();
  region.id = regionId;
  region.name = esiRegion.name;
  await region.save();
  console.log(`Created region: ${esiRegion.name} (${regionId})`);
}
