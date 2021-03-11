import React from 'react';
import {GraphQLClient} from 'graphql-request';
import {ActiveSpawnsQuery, getSdk} from '../lib/graphql';
import {Spawn} from '../components/spawn/spawn';

export const getServerSideProps = async () => {
  const client = new GraphQLClient('http://server:4001');
  const sdk = getSdk(client);
  const {activeSpawns} = await sdk.activeSpawns();

  return {props: {activeSpawns}};
};


export default function Home({activeSpawns}: ActiveSpawnsQuery) {
  return (
    <div className={'active-spawns'}>{
      activeSpawns.map((spawn) => {
        return (<Spawn key={spawn.id} spawn={spawn}/>);
      })
    }</div>
  );
}

