const express = require('express')
const router = express.Router()
const homepageController = require('../controllers/homepage') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, homepageController.getTodos)

router.post('/createTodo', homepageController.createTodo)

router.put('/markComplete', homepageController.markComplete)

router.put('/markIncomplete', homepageController.markIncomplete)

router.delete('/deleteTodo', homepageController.deleteTodo)

module.exports = router