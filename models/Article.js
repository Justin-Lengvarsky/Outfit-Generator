const mongoose = require('mongoose')

const ArticlesSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('todos', ArticlesSchema)
