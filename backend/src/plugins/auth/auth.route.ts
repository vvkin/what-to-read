import { FastifyPluginAsync } from 'fastify';
import { UserDto } from '@shared/dto/user.dto';

const authRoutes: FastifyPluginAsync = async (fastify) => {
  const { authService } = fastify;

  fastify.route({
    method: 'POST',
    url: '/signup',
    handler: async (request, reply) => {
      const userDto = request.body as UserDto;
      const tokens = await authService.register(userDto);
      reply.code(200).send(tokens);
    },
  });
};

export default authRoutes;
