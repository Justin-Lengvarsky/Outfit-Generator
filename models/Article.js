const mongoose = require('mongoose')

const ArticlesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  articles: {
    type: Object,
    required: true,
  }
})

module.exports = mongoose.model('todos', ArticlesSchema)
