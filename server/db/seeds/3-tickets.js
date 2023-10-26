export async function seed(knex) {
  await knex('tickets').insert([
    {
      user_id: 1,
      business_id: 2,
      status: 'inQue',
    },
    {
      user_id: 2,
      business_id: 3,
      status: 'complete',
    },
  ])
}
