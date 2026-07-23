import 'reflect-metadata';
import {scheduleJob} from 'node-schedule';
import {importSeedStaticData} from './commands/importSeedStaticData';
import {updateSovereignty} from './commands/updateSovereignty';
import {updateSpawns} from './commands/updateSpawns';
import {AppDataSource} from './lib/data-source';

const runSafely = async (label: string, action: () => Promise<void>) => {
  try {
    await action();
    console.log(`${label} completed`);
  } catch (error) {
    console.error(`${label} failed`, error);
  }
};

const runInitialSync = async () => {
  await runSafely('static seed import', async () => importSeedStaticData());
  await runSafely('initial spawn sync', async () => updateSpawns(true));
  await runSafely('initial sovereignty sync', async () => updateSovereignty());
};

AppDataSource.initialize().then(async () => {
  await runInitialSync();

  scheduleJob('5,10,15,20,25,30,35,40,45,50,55 * * * *', async () => {
    await runSafely('scheduled spawn sync', async () => updateSpawns());
  });

  scheduleJob('0 * * * *', async () => {
    await runSafely('scheduled influence sync', async () => updateSpawns(true));
  });

  scheduleJob('30 * * * *', async () => {
    await runSafely('scheduled sovereignty sync', async () => updateSovereignty());
  });
}).catch(error => {
  console.error(error);
  process.exitCode = 1;
});
