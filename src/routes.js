const express = require('express')

const CompanyController = require('./controllers/CompanyController')
const OpinionController = require('./controllers/OpinionController')

const routes = express.Router()

routes.post('/company', CompanyController.create)
routes.get('/company', CompanyController.index)

routes.post('/opinion', OpinionController.create)
routes.get('/opinion', OpinionController.index)

module.exports = routes