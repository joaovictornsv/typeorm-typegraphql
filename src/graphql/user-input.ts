import { Field, InputType } from 'type-graphql';

@InputType()
class UserInput {
  @Field({ nullable: false })
  name: string;

  @Field({ nullable: false })
  email: string;

  @Field()
  city: string;
}

export { UserInput };
