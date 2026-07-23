import 'reflect-metadata';
import {importSeedStaticData} from './commands/importSeedStaticData';
import {updateRats} from './commands/updateRats';
import {updateSovereignty} from './commands/updateSovereignty';
import {updateSpawns} from './commands/updateSpawns';
import {calculateHSSpawn} from './commands/calculateHSSpawn';
import {AppDataSource} from './lib/data-source';

const commands: Record<string, (args: string[]) => Promise<void>> = {
  importSeedStaticData: async () => importSeedStaticData(),
  updateSpawns: async (args) => updateSpawns(args.includes('--influenceLogs')),
  updateSovereignty: async () => updateSovereignty(),
  updateRats: async () => updateRats(),
  calculateHSSpawn: async () => calculateHSSpawn(),
  syncAll: async () => {
    await importSeedStaticData();
    await updateSpawns(true);
    await updateSovereignty();
  },
};

const run = async () => {
  const command = process.argv[2];
  const args = process.argv.slice(3);

  if (!command || !commands[command]) {
    console.log(`Unknown command: ${command ?? '(missing)'}`);
    console.log(`Available commands: ${Object.keys(commands).join(', ')}`);
    process.exitCode = 1;
    return;
  }

  await AppDataSource.initialize();
  try {
    await commands[command](args);
  } finally {
    await AppDataSource.destroy();
  }
};

run().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
