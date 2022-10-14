const mongoose = require('mongoose')

const FavoritesSchema = new mongoose.Schema({
  jacket: {
    type: String,
    required: true,
  },
  shirt: {
    type: String,
    required: true,
  },
  pants: {
    type: String,
    required: true,
  },
  shoes: {
    type: String,
    required: true,
  },
  outfitType: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('favoriteoutfits', FavoritesSchema)