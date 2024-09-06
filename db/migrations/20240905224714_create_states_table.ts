import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('states', (table) => {
    table.uuid('id').primary()
    table.text('state_name')
    table.text('acronym')
    table.text('capital')
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('states')
}
