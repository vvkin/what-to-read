import { UserService } from '@plugins/user/user.service';
import { UserDto } from '@shared/dto/user.dto';
import { JwtService } from './jwt.service';

interface TokensPair {
  accessToken: string;
  refreshToken: string;
}

class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService
  ) {}

  async register(user: UserDto): Promise<TokensPair | undefined> {
    return { accessToken: 'mock', refreshToken: 'mock' };
  }

  async login({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): Promise<TokensPair | undefined> {
    return { accessToken: 'mock', refreshToken: 'mock' };
  }
}

export { AuthService };
