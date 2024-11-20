const express = require('express')
const router = express.Router()
const pages = require('../controllers/authController.js')
// const upload = require("../utils/upload.js")
const {isAuthenticatedUser, isLoggedIn} = require("../middlewares/authMiddlewaresUser.js")

router.route('/login').post(pages.userLoginController)
router.route('/register').post(pages.userRegisterController)
router.route('/email').get(pages.emailController)

module.exports = router