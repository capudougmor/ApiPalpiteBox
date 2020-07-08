const express = require('express')

const CompanyController = require('./controllers/companyController')

const routes = express.Router()

routes.post('/company', CompanyController.create)

module.exports = routes