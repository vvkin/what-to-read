import { join } from 'path';
import Fastify from 'fastify';
import AutoLoad from 'fastify-autoload';
import { configFactory, APP_CONFIG } from './config';

const { port, host, logger } = configFactory()[APP_CONFIG];

const fastify = Fastify({ logger });
fastify.register(AutoLoad, { dir: join(__dirname, 'plugins') });
fastify.register(AutoLoad, { dir: join(__dirname, 'routes') });

fastify.listen(port, host, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
