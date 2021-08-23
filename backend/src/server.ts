import Fastify from 'fastify';
import { config, SERVER_CONFIG } from '@config/config';
import { app } from './app';

const { port, host, logger } = config[SERVER_CONFIG];

const server = Fastify({ logger });
server.register(app);

server.listen(port, host, (err) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});
