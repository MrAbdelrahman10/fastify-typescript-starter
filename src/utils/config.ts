
export default {
	app_port: parseInt(process.env.APP_PORT?.toString() || '8080'),
	database_url: process.env.DATABASE_URL,
}