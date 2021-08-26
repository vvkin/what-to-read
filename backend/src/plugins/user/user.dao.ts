import { Database } from '@interfaces/db.interface';
import { UserDto } from '@shared/dto/user.dto';

class UserDao {
  constructor(private database: Database) {}

  // async create(dto: UserDto): Promise<DatabaseResult> {
  //   const users = this.database.db().collection('users');
  //   return users.insertOne(dto);
  // }
}

export { UserDao };
