import * as Path from 'node:path'
import * as URL from 'node:url'

import express from 'express'
import handlebars from 'express-handlebars'
import * as db from './db/db.js'

import userRoutes from './routes/users.js'

const server = express()

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)
const publicFolder = Path.resolve('public')
server.use(express.static(publicFolder))

// Middleware
server.engine('hbs', handlebars.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', Path.join(__dirname, 'views'))
server.use(express.urlencoded({ extended: true }))

// Server
server.get('/', async (req, res) => {
  const businessesArray = await db.getAllBusinesses()
  const viewData = { businesses: businessesArray }
  res.render('index', viewData)
})

server.get('/business/:id', async (req, res) => {
  try {
    const id = req.params.id
    const ticketCount = await db.getTicketCount(id)
    const business = await db.getBusiness(id)
    const viewData = {
      tickets: [
        {
          id: business.id,
          name: business.name,
          logo: business.logo,
          email: business.email,
          queue: ticketCount.count,
          wait_minutes: ticketCount.count * business.avg_appointment_time_mins,
        },
      ],
    }
    res.render('business', viewData)
  } catch (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }
})

server.get('/business/checkin/:id', async (req, res) => {
  const id = req.params.id
  const business = await db.getBusiness(id)
  const viewData = { business }
  res.render('checkin', viewData)
})

server.post('/business/checkin/:id', async (req, res) => {
  const { name, email } = req.body
  console.log(req.params.id)
  const business_id = req.params.id
  const user_id = await db.addUser(name, email)
  console.log('user', user_id[0])
  console.log('business', business_id)
  await db.addTicket(user_id[0], business_id)
  res.redirect(`/business/${business_id}`)
})

export default server
