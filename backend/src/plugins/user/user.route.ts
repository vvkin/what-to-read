import { FastifyPluginAsync } from 'fastify';

const routes: FastifyPluginAsync = async (fastify, opts) => {
  const { userService } = fastify;

  fastify.route<{ Params: { id: number } }>({
    url: '/:id',
    method: 'GET',
    handler: async (request, reply) => {
      const { id } = request.params;
      const user = await userService.get(id);
      reply.code(200).send({ user });
    },
  });
};

export default routes;
