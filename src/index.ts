import fastify from 'fastify';
import * as dotenv from 'dotenv';
dotenv.config();
import config from 'utils/config';
import { bootstrap } from 'fastify-decorators';
import { resolve } from 'path';
import appConfiguration from 'plugins/app-configuration';

const server = fastify()

server.register(appConfiguration);

// Register handlers auto-bootstrap
server.register(bootstrap, {
	// Specify directory with our handler
	directory: resolve(__dirname, `modules`),
  
	// Specify mask to match only our handler
	mask: /\**.controller\./,
  });

server.listen({ port: config.app_port }, (err, address) => {
	if (err) {
		console.error(err)
		process.exit(1)
	}
	console.log(`Server listening at ${address}`)
});
