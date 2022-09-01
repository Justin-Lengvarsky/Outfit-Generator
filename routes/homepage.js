const express = require('express')
const router = express.Router()
const homepageController = require('../controllers/homepage') 

const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, homepageController.getTodos)

module.exports = router