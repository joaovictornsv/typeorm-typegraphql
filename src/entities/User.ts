import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column, Entity, PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('users')
@ObjectType()
class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryColumn('uuid')
  id: string = uuid();

  @Field({ nullable: false })
  @Column('varchar')
  name: string;

  @Field({ nullable: false })
  @Column('varchar')
  email: string;

  @Field()
  @Column('varchar')
  city: string;
}

export { User };
