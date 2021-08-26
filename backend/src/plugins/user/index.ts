import fp from 'fastify-plugin';
import { UserService } from './user.service';
import userRoutes from './user.route';
import { FastifyPluginAsync } from 'fastify';

const user: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.register(userRoutes, { prefix: 'users' });
};

export default fp(user, {
  name: 'user',
  dependencies: ['auth'],
});

declare module 'fastify' {
  export interface FastifyInstance {
    userService: UserService;
  }
}
