import { Knex, knex as setupKnex } from 'knex'

export const config: Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: './db/database.db',
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
  seeds: {
    directory: './db/seeds',
  },
}

export const knex = setupKnex(config)
