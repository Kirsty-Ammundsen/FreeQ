export async function seed(knex) {
  await knex('users').insert([
    { name: 'Ambitious Aardvark', email: 'aardvark@example.org' },
    { name: 'Bamboozled Baboon', email: 'baboon@example.org' },
    { name: 'Curious Capybara', email: 'capybara@example.org' },
    { name: 'Dilapidated Duck', email: 'duck@example.org' },
    { name: 'Exuberant Elephant', email: 'elephant@example.org' },
  ])
}
