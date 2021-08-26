import { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';

import { UserDao } from '@plugins/user/user.dao';
import { UserService } from '@plugins/user/user.service';
import { AuthService } from './auth.service';
import { JwtService } from './jwt.service';
import authRoutes from './auth.route';
import { Database } from '@interfaces/db.interface';

const auth: FastifyPluginAsync = async (fastify): Promise<void> => {
  const userDao = new UserDao(fastify.database);
  const userService = new UserService(userDao);
  const jwtService = new JwtService();
  const authService = new AuthService(jwtService, userService);

  fastify.decorate('userService', userService);
  fastify.decorate('authService', authService);
  fastify.register(authRoutes, { prefix: 'auth' });
};

export default fp(auth, {
  name: 'auth',
  dependencies: ['db'],
});

declare module 'fastify' {
  export interface FastifyInstance {
    userService: UserService;
    authService: AuthService;
    database: Database;
  }
}
