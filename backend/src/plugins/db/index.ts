import { FastifyPluginAsync } from 'fastify';
import { fastifyMongodb } from 'fastify-mongodb';
import fp from 'fastify-plugin';

import { config, DATABASE_CONFIG } from '@config/config';
import { Database } from '@interfaces/db.interface';

const { connectionUrl } = config[DATABASE_CONFIG];

const db: FastifyPluginAsync = async (fastify): Promise<void> => {
  void fastify.register(fastifyMongodb, {
    forceClose: true,
    url: connectionUrl,
    name: 'database',
  });
};

export default fp(db, {
  name: 'db',
});

declare module 'fastify' {
  export interface FastifyInstance {
    database: Database;
  }
}
