import { FastifyReply, FastifyRequest } from "fastify";
import { Controller, GET } from "fastify-decorators";

@Controller({route: '/'})
export default class HomeController {

	@GET('')
	async index(request: FastifyRequest, reply: FastifyReply) {
		return {
			message: 'Hello World!'
		}
	}

}
