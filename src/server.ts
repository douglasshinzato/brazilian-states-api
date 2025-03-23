import fastify from 'fastify'
import { env } from './env'
import { statesRoutes } from './routes/states'

const app = fastify()

app.register(statesRoutes, {
  prefix: '/',
})

app
  .listen({
    port: env.PORT,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('Server Running!')
  })
