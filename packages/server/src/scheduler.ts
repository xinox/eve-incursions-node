import {scheduleJob} from 'node-schedule';
import {updateSpawns} from './commands/updateSpawns';
import {updateSovereignty} from './commands/updateSovereignty';
import {AppDataSource} from './lib/data-source';
import {importSeedStaticData} from './commands/importSeedStaticData';

const runSafely = async (label: string, action: () => Promise<void>) => {
  try {
    await action();
    console.log(`${label} completed`);
  } catch (error) {
    console.error(`${label} failed`, error);
  }
};

const runInitialSync = async () => {
  await runSafely('static seed import', async () => {
    await importSeedStaticData();
  });

  await runSafely('initial spawn sync', async () => {
    await updateSpawns(true);
  });

  await runSafely('initial sovereignty sync', async () => {
    await updateSovereignty();
  });
};

AppDataSource.initialize().then(async () => {
  await runInitialSync();

  scheduleJob('5,10,15,20,25,30,35,40,45,50,55 * * * *', async () => {
    await runSafely('scheduled spawn sync', async () => {
      await updateSpawns();
    });
  });

  scheduleJob('0 * * * *', async () => {
    await runSafely('scheduled influence sync', async () => {
      await updateSpawns(true);
    });
  });

  scheduleJob('30 * * * *', async () => {
    await runSafely('scheduled sovereignty sync', async () => {
      await updateSovereignty();
    });
  });
}).catch(e => console.error(e));
