import fastify from 'fastify'
import { statesRoutes } from './routes/states'

const app = fastify()

app.register(statesRoutes, {
  prefix: 'states',
})

app
  .listen({
    port: 3334,
  })
  .then(() => {
    console.log('Server Running!')
  })
