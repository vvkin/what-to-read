import { config, JWT_CONFIG } from '@config/config';
import { JwtPayload, sign, verify } from 'jsonwebtoken';

const { secret, expiresIn } = config[JWT_CONFIG];

interface UserPayload extends JwtPayload {
  userId: string;
}

class JwtService {
  sign(payload: UserPayload): Promise<string | undefined> {
    return new Promise((resolve, reject) => {
      sign(payload, secret, { expiresIn }, (err, token) => {
        err ? reject(err) : resolve(token);
      });
    });
  }

  async verify(token: string): Promise<UserPayload | undefined> {
    return new Promise((resolve, reject) => {
      verify(token, secret, (err, payload) => {
        err ? reject(err) : resolve(payload as UserPayload);
      });
    });
  }
}

export { JwtService };
