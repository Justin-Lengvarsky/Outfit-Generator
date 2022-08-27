const Article = require('../models/Article')

module.exports = {
    getOutfits: async (req,res)=>{
        console.log(Article)

        try{
            const articleNums = await Article.countDocuments({ userId: "6306bffc5b397d73a9f8ae1f"})
            console.log(articleNums)

            // const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
            res.render('outfit.ejs', {message: articleNums})
        }catch(err){
            console.log(err)
        }
    },
}    