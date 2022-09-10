const express = require('express')
const router = express.Router()
const guestOutfitController = require('../controllers/guest') 

const { ensureAuth, ensureGuest } = require('../middleware/auth')


router.get('/', ensureGuest, guestOutfitController.getOutfits)

module.exports = router