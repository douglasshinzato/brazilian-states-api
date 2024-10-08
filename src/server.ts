import fastify from 'fastify'
import { statesRoutes } from './routes/states'

const app = fastify()

app.register(statesRoutes, {
  prefix: '/',
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server Running!')
  })
