import "reflect-metadata";
import {updateSpawns} from './commands/updateSpawns';

const run = async () => {
  if (process.argv.length < 3) {
    console.log('Not enough parameters');
  }

  const args = process.argv.slice(3);
  const command = process.argv[2];

  if (command === "updateSpawns") {
    const influenceLogs = args.indexOf('--influenceLogs') !== -1;
    await updateSpawns();

  } else {
    console.log(`${command} not found`);
  }
};

run().catch(e => console.log(e));

