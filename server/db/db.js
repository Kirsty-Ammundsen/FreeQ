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

export async function getBusiness(id) {
  return db('businesses').where('id', id).first()
}

export async function getTicketCount(id) {
  return db('tickets')
    .join('businesses', 'tickets.business_id', 'businesses.id')
    .where('tickets.business_id', id)
    .count('tickets.id as count')
    .first()
}
