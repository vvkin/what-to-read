import { UserDao } from './user.dao';
import { UserDto } from '@shared/dto/user.dto';

class UserService {
  constructor(private dao: UserDao) {}

  async create(dto: unknown): Promise<void> {
    await dto;
  }

  async get(userId: number): Promise<UserDto & { userId: number }> {
    return {
      userId,
      username: 'mock',
      email: 'mock',
      password: 'mock',
    };
  }
}

export { UserService };
