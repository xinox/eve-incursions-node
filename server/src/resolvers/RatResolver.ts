import {Resolver, Query} from 'type-graphql';
import {RatGroup} from '../models/Rats';
import {Spawn} from '../models/Spawn';

@Resolver()
export class RatResolver {
  @Query(() => [RatGroup])
  ratGroups() {
    return RatGroup.find({order: {id: 'DESC'}});
  }
}
