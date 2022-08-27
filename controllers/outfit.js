const Article = require('../models/Article')

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
}    