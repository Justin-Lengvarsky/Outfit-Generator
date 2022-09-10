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
            res.render('guest.ejs', {message: articleNums, dictionary: allArticles})
        }catch(err){
            console.log(err)
        }
    }
}    