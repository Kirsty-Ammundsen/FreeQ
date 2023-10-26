export async function seed(knex) {
  await knex('users').del()
  await knex('businesses').del()
  await knex('tickets').del()
}
