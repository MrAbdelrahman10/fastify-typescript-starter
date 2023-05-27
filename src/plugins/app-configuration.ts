import fp from 'fastify-plugin'
import config from 'utils/config';

export interface SupportPluginOptions {
  // Specify Support plugin options here
}

// The use of fastify-plugin is required to be able
// to export the decorators to the outer scope
export default fp<SupportPluginOptions>(async (fastify, opts) => {
  fastify.decorate('AppConfiguration', config);
})

// When using .decorate you have to specify added properties for Typescript
declare module 'fastify' {
  export interface FastifyInstance {
    AppConfiguration: typeof config;
  }
}
