import {
  Column, Entity, PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('users')
class User {
  @PrimaryColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @Column('varchar')
  email: string;

  @Column('varchar')
  city: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
