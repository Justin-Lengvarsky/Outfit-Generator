const Article = require('../models/Article')
const Favorite = require('../models/Favorite')

module.exports = {
    getFavorites: async (req,res)=>{
        console.log(req.user)
        try{
            const allFavorites = await Favorite.find({userId: req.user.id})
            const allArticles = await Article.find({name: "clothingDictionary"})
            const articleNums = await Favorite.countDocuments({ userId: req.user.id})

            res.render('favorites.ejs', {favorites: allFavorites, dictionary: allArticles, articleNums: articleNums})
        }catch(err){
            console.log(err)
        }
    },
    editFavorite: async (req, res)=>{
        console.log(req.body.outfitIdFromJSFile)
        console.log(req.body)
        console.log(req.body.shirtChoice)

        try{
            await Favorite.findOneAndUpdate({_id:req.body.outfitIdFromJSFile}, {
                jacket: req.body.jacketChoice,
                shirt: req.body.shirtChoice,
                pants: req.body.pantsChoice,
                shoes: req.body.shoesChoice
            })
       
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

