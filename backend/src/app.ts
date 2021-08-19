import Fastify from 'fastify';

const server = Fastify({ logger: true });

server.get('/', (request, reply) => {
  reply.send({ hello: 'world' });
});

server.listen(8080);