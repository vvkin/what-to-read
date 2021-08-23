import { join } from 'path';
import { FastifyPluginAsync } from 'fastify';
import AutoLoad, { AutoloadPluginOptions } from 'fastify-autoload';
import { fastifyMongodb } from 'fastify-mongodb';
import { config, DATABASE_CONFIG } from '@config/config';
import { Database } from '@interfaces/database.interface';

export type AppOptions = {
  // additional options
} & Partial<AutoloadPluginOptions>;

const { connectionUrl } = config[DATABASE_CONFIG];

const app: FastifyPluginAsync<AutoloadPluginOptions> = async (
  fastify,
  opts
): Promise<void> => {
  void fastify.register(fastifyMongodb, {
    forceClose: true,
    url: connectionUrl,
    name: 'db',
  });
  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'plugins'),
    options: opts,
  });
};

export default app;
export { app };

declare module 'fastify' {
  export interface FastifyInstance {
    db: Database;
  }
}
