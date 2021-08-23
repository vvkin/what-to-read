import 'dotenv/config';
import { IServerConfig } from '@config/interfaces/server.config';
import { IDatabaseConfig } from '@config/interfaces/database.config';

export const SERVER_CONFIG = 'SERVER';
export const DATABASE_CONFIG = 'DATABASE';

export const config = {
  [SERVER_CONFIG]: {
    port: process.env.PORT ?? 8080,
    host: process.env.HOST ?? '127.0.0.1',
    logger: true,
  } as IServerConfig,
  [DATABASE_CONFIG]: {
    connectionUrl: process.env.DATABASE_URL,
    dbName: process.env.DATABASE_NAME,
  } as IDatabaseConfig,
};
