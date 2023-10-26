import knex from 'knex'
import knexfile from './knexfile.js'

const environment = process.env.NODE_ENV || 'development'
const config = knexfile[environment]
export const db = knex(config)

export async function getUsers() {
  return db('users').select()
}

export async function getUser(id) {
  return db('users').where('id', id).first()
}
