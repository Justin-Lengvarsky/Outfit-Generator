const express = require('express')
const router = express.Router()
const guestOutfitController = require('../controllers/guest') 

router.get('/', guestOutfitController.getOutfits)

module.exports = router