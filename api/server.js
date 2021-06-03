require('dotenv').config()
const express = require('express')
const cors = require('cors')
const routes = require('../config/routes')
const server = express()

server.use(cors())
server.use(express.json())

server.use('/api', routes)

module.exports = server
