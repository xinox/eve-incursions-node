import {AppDataSource} from '../lib/data-source';


export const updateSystems = async () => {
  const rawSystems = await AppDataSource.query(`SELECT * FROM mapSolarSystems`);
  let differentCount = 0;

  for await (const rawSystem of rawSystems) {
    const rawId = rawSystem.solarSystemID;
    const systems = await AppDataSource.query(`SELECT * FROM solar_systems WHERE solarSystemID = ${rawId}`);

    if (systems.length === 0) {
      differentCount++;
    } else {
      const system = systems[0];
      const changedKeys = [];
      for (const rawSystemKey in rawSystem) {
        if (rawSystem[rawSystemKey] !== system[rawSystemKey]) {
          changedKeys.push(rawSystemKey);
        }
      }

      if (changedKeys.length > 0) {
        differentCount++;

        if (changedKeys.includes('constellationID')) {
          changedKeys.push('systemType');
          rawSystem.systemType = 'not known';
        }

        await AppDataSource.query(`UPDATE solar_systems SET ${changedKeys.map(key => `${key} = ?`).join(', ')} WHERE solarSystemID = ${rawId}`, changedKeys.map(key => rawSystem[key]));
      }
    }
  }
};
