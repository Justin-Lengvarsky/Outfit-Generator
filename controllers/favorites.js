const Favorite = require('../models/Favorite')

module.exports = {
    getFavorites: async (req,res)=>{
        console.log(req.user)
        try{
            const allFavorites = await Favorite.find({userId: req.user.id})

            res.render('favorites.ejs', {favorites: allFavorites})
        }catch(err){
            console.log(err)
        }
    },
}    