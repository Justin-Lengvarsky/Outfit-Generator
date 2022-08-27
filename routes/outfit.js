const express = require('express')
const router = express.Router()
const outfitController = require('../controllers/outfit') 

const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, outfitController.getOutfits)
router.post('/postOutfit', ensureAuth, outfitController.postOutfits)


module.exports = router