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
      status: 'inQue',
    },
    {
      user_id: 3,
      business_id: 1,
      status: 'inQue',
    },
    {
      user_id: 4,
      business_id: 2,
      status: 'inQue',
    },
  ])
}
