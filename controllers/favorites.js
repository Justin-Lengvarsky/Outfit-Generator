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
    deleteFavorite: async (req, res)=>{
        console.log(req.body.outfitIdFromJSFile)
        try{
            await Favorite.findOneAndDelete({_id:req.body.outfitIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    