const express = require('express')
const Router = express.Router()

const WelcomeController = require('../app/controllers/Welcome')

Router.route('/').get(WelcomeController.index)

module.exports = Router
