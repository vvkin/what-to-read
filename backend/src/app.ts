import { join } from 'path';
import { FastifyPluginAsync } from 'fastify';
import AutoLoad, { AutoloadPluginOptions } from 'fastify-autoload';

export type AppOptions = {
  // additional options
} & Partial<AutoloadPluginOptions>;

const app: FastifyPluginAsync<AutoloadPluginOptions> = async (
  fastify,
  opts
): Promise<void> => {
  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'plugins'),
    options: opts,
  });
};

export default app;
export { app };
