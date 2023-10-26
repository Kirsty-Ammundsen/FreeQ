export async function up(knex) {
  await knex.schema.createTable('businesses', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('email')
    table.integer('avg_appointment_time_mins')
    table.string('css_theme')
    table.string('logo')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('businesses')
}
