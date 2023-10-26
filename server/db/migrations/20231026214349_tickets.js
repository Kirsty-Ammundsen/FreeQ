export async function up(knex) {
  await knex.schema.createTable('tickets', (table) => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.integer('business_id').references('businesses.id')
    table.string('status')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('tickets')
}
