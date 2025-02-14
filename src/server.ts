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
    host: 'RENDER' in process.env ? '0.0.0.0' : 'localhost',
  })
  .then(() => {
    console.log('Server Running!')
  })
