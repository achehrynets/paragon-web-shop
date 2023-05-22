const authController = require('./controller')
const router = require('express').Router()

/**
 * Initialize auth controller routes
 */
function initAuthRoutes() {
  router.post('/login', authController.login)
  router.post('/register', authController.register)
}

initAuthRoutes()

module.exports = router