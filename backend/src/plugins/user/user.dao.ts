import { Database } from '@interfaces/database.interface';

class UserDao {
  constructor(private db: Database) {}
}

export { UserDao };
