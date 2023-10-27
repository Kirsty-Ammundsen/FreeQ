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
  const viewData = {
    businesses: [
      { id: 1, name: 'BarberShop', logo: 'barber.png' },
      { id: 2, name: 'Cute Doctors', logo: 'hospital.png' },
      { id: 3, name: 'Vampire Phlebs', logo: 'blood-test.png' },
    ],
  }

  try {
    res.render('index', viewData)
  } catch (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }
})

server.get('/business/:id', async (req, res) => {
  const viewData = {
    businesses: [
      { name: 'BarberShop', logo: 'barber.png' },
      { name: 'Cute Doctors', logo: 'hospital.png' },
      { name: 'Vampire Phlebs', logo: 'blood-test.png' },
    ],
  }
  try {
    const id = req.params.id
    console.log(id)
    const business = await db.getBusiness(id)
    res.send(`here's the business details ${id}`)
  } catch (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }
})

export default server
