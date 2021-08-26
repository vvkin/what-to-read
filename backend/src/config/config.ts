import 'dotenv/config';
import { ServerConfig } from '@config/interfaces/server.config';
import { DatabaseConfig } from '@config/interfaces/database.config';
import { JwtConfig } from './interfaces/jwt.config';

export const SERVER_CONFIG = 'SERVER';
export const DATABASE_CONFIG = 'DATABASE';
export const JWT_CONFIG = 'JWT';

export const config = {
  [SERVER_CONFIG]: {
    port: process.env.PORT ?? 8080,
    host: process.env.HOST ?? '127.0.0.1',
    logger: { prettyPrint: true },
  } as ServerConfig,
  [DATABASE_CONFIG]: {
    connectionUrl: process.env.DATABASE_URL,
  } as DatabaseConfig,
  [JWT_CONFIG]: {
    secret: process.env.JWT_SECRET,
    expiresIn: 1.8e6,
  } as JwtConfig,
};
