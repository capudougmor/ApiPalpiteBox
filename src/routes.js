const express = require('express')

const CompanyController = require('./controllers/CompanyController')
const OpinionController = require('./controllers/OpinionController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
const CouponController = require('./controllers/CouponController')

const routes = express.Router()

routes.post('/company', CompanyController.create)
routes.get('/company', CompanyController.index)

routes.post('/opinion', OpinionController.create)
routes.get('/opinion', OpinionController.index)
routes.delete('/opinion/:id', OpinionController.delete)

routes.get('/profile', ProfileController.index)

routes.post('/session', SessionController.create)

routes.get('/getCoupons', CouponController.index)

module.exports = routes