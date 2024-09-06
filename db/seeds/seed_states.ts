import { randomUUID } from 'crypto'
import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('states').del()

  // Inserts seed entries
  await knex('states').insert([
    {
      id: randomUUID(),
      state_name: 'Acre',
      acronym: 'AC',
      capital: 'Rio Branco',
    },
    {
      id: randomUUID(),
      state_name: 'Alagoas',
      acronym: 'AL',
      capital: 'Maceió',
    },
    { id: randomUUID(), state_name: 'Amapá', acronym: 'AP', capital: 'Macapá' },
    {
      id: randomUUID(),
      state_name: 'Amazonas',
      acronym: 'AM',
      capital: 'Manaus',
    },
    {
      id: randomUUID(),
      state_name: 'Bahia',
      acronym: 'BA',
      capital: 'Salvador',
    },
    {
      id: randomUUID(),
      state_name: 'Ceará',
      acronym: 'CE',
      capital: 'Fortaleza',
    },
    {
      id: randomUUID(),
      state_name: 'Distrito Federal',
      acronym: 'DF',
      capital: 'Brasília',
    },
    {
      id: randomUUID(),
      state_name: 'Espírito Santo',
      acronym: 'ES',
      capital: 'Vitória',
    },
    {
      id: randomUUID(),
      state_name: 'Goiás',
      acronym: 'GO',
      capital: 'Goiânia',
    },
    {
      id: randomUUID(),
      state_name: 'Maranhão',
      acronym: 'MA',
      capital: 'São Luís',
    },
    {
      id: randomUUID(),
      state_name: 'Mato Grosso',
      acronym: 'MT',
      capital: 'Cuiabá',
    },
    {
      id: randomUUID(),
      state_name: 'Mato Grosso do Sul',
      acronym: 'MS',
      capital: 'Campo Grande',
    },
    {
      id: randomUUID(),
      state_name: 'Minas Gerais',
      acronym: 'MG',
      capital: 'Belo Horizonte',
    },
    { id: randomUUID(), state_name: 'Pará', acronym: 'PA', capital: 'Belém' },
    {
      id: randomUUID(),
      state_name: 'Paraíba',
      acronym: 'PB',
      capital: 'João Pessoa',
    },
    {
      id: randomUUID(),
      state_name: 'Paraná',
      acronym: 'PR',
      capital: 'Curitiba',
    },
    {
      id: randomUUID(),
      state_name: 'Pernambuco',
      acronym: 'PE',
      capital: 'Recife',
    },
    {
      id: randomUUID(),
      state_name: 'Piauí',
      acronym: 'PI',
      capital: 'Teresina',
    },
    {
      id: randomUUID(),
      state_name: 'Rio de Janeiro',
      acronym: 'RJ',
      capital: 'Rio de Janeiro',
    },
    {
      id: randomUUID(),
      state_name: 'Rio Grande do Norte',
      acronym: 'RN',
      capital: 'Natal',
    },
    {
      id: randomUUID(),
      state_name: 'Rio Grande do Sul',
      acronym: 'RS',
      capital: 'Porto Alegre',
    },
    {
      id: randomUUID(),
      state_name: 'Rondônia',
      acronym: 'RO',
      capital: 'Porto Velho',
    },
    {
      id: randomUUID(),
      state_name: 'Roraima',
      acronym: 'RR',
      capital: 'Boa Vista',
    },
    {
      id: randomUUID(),
      state_name: 'Santa Catarina',
      acronym: 'SC',
      capital: 'Florianópolis',
    },
    {
      id: randomUUID(),
      state_name: 'São Paulo',
      acronym: 'SP',
      capital: 'São Paulo',
    },
    {
      id: randomUUID(),
      state_name: 'Sergipe',
      acronym: 'SE',
      capital: 'Aracaju',
    },
    {
      id: randomUUID(),
      state_name: 'Tocantins',
      acronym: 'TO',
      capital: 'Palmas',
    },
  ])
}
