import { FastifyInstance } from 'fastify'
import { knex } from '../database'

export async function statesRoutes(app: FastifyInstance) {
  app.get('/', async () => {
    const states = await knex('states')

    return { states }
  })

  app.get('/:acronym', async (request, reply) => {
    const { acronym } = request.params as { acronym: string }

    try {
      const state = await knex('states')
        .where({ acronym: acronym.toUpperCase() })
        .first()
      if (!state) {
        return reply.status(404).send({ message: 'State not found' })
      } else {
        return reply.send(state)
      }
    } catch (error) {
      return reply.status(500).send({ message: 'Internal server error', error })
    }
  })

  app.get('/capital/:capital', async (request, reply) => {
    const { capital } = request.params as { capital: string }

    try {
      const state = await knex('states')
        .where({ capital: capital.charAt(0).toUpperCase() + capital.slice(1) })
        .first()
      if (!state) {
        return reply.status(404).send({ message: 'State not found' })
      } else {
        return reply.send(state)
      }
    } catch (error) {
      return reply.status(500).send({ message: 'Internal server error', error })
    }
  })
}
