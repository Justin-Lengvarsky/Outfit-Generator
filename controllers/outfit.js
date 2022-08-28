const Article = require('../models/Article')
const Favorite = require('../models/Favorite')


module.exports = {
    getOutfits: async (req,res)=>{
        console.log(Article)

        try{
            const allArticles = await Article.find({name: "clothingDictionary"})
            console.log(allArticles[0].articles)
            const articleNums = await Article.countDocuments({ name: "clothingDictionary"})
            console.log(articleNums)

            // const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
            res.render('outfit.ejs', {message: articleNums, dictionary: allArticles})
        }catch(err){
            console.log(err)
        }
    },
    postOutfits: async (req, res)=>{
        try{
            await Favorite.create({jacket: req.body.jacketChoice, shirt: req.body.shirtChoice, pants: req.body.pantsChoice, shoes: req.body.shoesChoice, userId: req.user.id})
            console.log('Outfit has been saved!')
            res.redirect('/outfit')
        }catch(err){
            console.log(err)
        }
    },
}    