import fastify from 'fastify'
import { statesRoutes } from './routes/states'

const app = fastify()

app.register(statesRoutes, {
  prefix: '/',
})

const port = process.env.PORT || 3333

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('Server Running!')
  })
