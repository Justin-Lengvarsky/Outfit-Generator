const express = require('express')
const router = express.Router()
const tipsController = require('../controllers/tips') 

const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, tipsController.getTips)

module.exports = router