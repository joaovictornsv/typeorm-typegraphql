/* eslint-disable no-param-reassign */
import {
  Arg, Mutation, Query, Resolver,
} from 'type-graphql';
import { User } from '../entities/User';
import { UserInput } from './user-input';

@Resolver(User)
class UserResolver {
  @Query(() => [User])
  async users() {
    const users = await User.find();

    return users;
  }

  @Query(() => User)
  async user(@Arg('id') id: string) {
    const user = await User.findOne(id);

    return user;
  }

  @Mutation(() => User)
  async createUser(@Arg('data') data: UserInput) {
    const user = User.create(data);

    await User.save(user);

    return user;
  }
}

export { UserResolver };
