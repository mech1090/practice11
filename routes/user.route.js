const express = require('express')
const router = express.Router()
const userController = require('../controller/user.controller')

router.get('/login',userController.getLoginFrom)
router.post('/login',userController.login)
router.get('/signup',userController.getSignupFrom)
router.post('/signup',userController.signup)

module.exports = router