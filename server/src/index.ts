import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import {buildSchema} from 'type-graphql';
import {SpawnResolver} from './resolvers/SpawnResolver';
import waitPort from 'wait-port';
import {CommunityResolver} from './resolvers/CommunityResolver';
import {SpawnLogResolver} from './resolvers/SpawnLogResolver';
import {createConnection} from './lib/db';

async function main() {
  await waitPort({host: process.env.MYSQL_HOST, port: 3306});
  const connection = await createConnection();
  const schema = await buildSchema({
    resolvers: [SpawnResolver, CommunityResolver, SpawnLogResolver] // add this
  })
  const server = new ApolloServer({ schema })
  await server.listen(4001)
  console.log("Server has started!")
}

main().catch(e => console.error(e));
