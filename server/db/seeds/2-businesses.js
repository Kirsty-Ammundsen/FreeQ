export async function seed(knex) {
  await knex('businesses').insert([
    {
      name: 'Doctors',
      email: 'doctors@gmail.com',
      avg_appointment_time_mins: 90,
      css_theme: 'doctorTheme',
      logo: 'doctorsEmoji',
    },
    {
      name: 'Babers',
      email: 'barbers@gmail.com',
      avg_appointment_time_mins: 60,
      css_theme: 'barberTheme',
      logo: 'barbersEmoji',
    },
    {
      name: 'Mechanics',
      email: 'mechanics@gmail.com',
      avg_appointment_time_mins: 30,
      css_theme: 'mechanicTheme',
      logo: 'mechanicEmoji',
    },
    {
      name: 'Vampire Phlebs',
      email: 'vampire@gmail.com',
      avg_appointment_time_mins: 15,
      css_theme: 'vampireTheme',
      logo: 'vampireEmoji',
    },
  ])
}
