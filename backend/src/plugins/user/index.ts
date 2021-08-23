import fp from 'fastify-plugin';
import { UserDao } from './user.dao';
import { UserService } from './user.service';
import userRoutes from './user.route';

export default fp(async (fastify): Promise<void> => {
  const userDao = new UserDao(fastify.db);
  const userService = new UserService(userDao);
  fastify.decorate('userService', userService);
  fastify.register(userRoutes, { prefix: 'users' });
});

declare module 'fastify' {
  export interface FastifyInstance {
    userService: UserService;
  }
}
