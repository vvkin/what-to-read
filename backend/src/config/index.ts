/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { config } from 'dotenv';
import { IAppConfig } from './interfaces/app.config';
import { IDatabaseConfig } from './interfaces/database.config';

config();
export const APP_CONFIG = 'APP';
export const DATABASE_CONFIG = 'DATABASE';

export const configFactory = () => ({
  [APP_CONFIG]: {
    port: process.env.PORT ?? 8080,
    host: process.env.HOST ?? '127.0.0.1',
    logger: true,
  } as IAppConfig,
  [DATABASE_CONFIG]: {
    connectionUrl: process.env.DATABASE_URL,
  } as IDatabaseConfig,
});
