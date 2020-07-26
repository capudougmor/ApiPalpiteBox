const express = require('express')

const CompanyController = require('./controllers/CompanyController')
const OpinionController = require('./controllers/OpinionController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.post('/company', CompanyController.create)
routes.get('/company', CompanyController.index)
routes.delete('/company/:id', CompanyController.delete)

routes.post('/opinion', OpinionController.create)
routes.get('/opinion', OpinionController.index)
routes.delete('/opinion/:id', OpinionController.delete)

routes.get('/profile', ProfileController.index)
routes.put('/profile', ProfileController.update)

routes.post('/session', SessionController.create)

module.exports = routes