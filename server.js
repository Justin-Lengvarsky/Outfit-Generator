const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const PORT = 8000
// const cors = require('cors');
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()


let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'outfit-generator'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })

    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(express.static('public'))
    app.use(bodyParser.json())
    app.set('view engine', 'ejs')


    app.get('/', (req, res) => {
        db.collection('savedOutfits').find().toArray()
          .then(results => {
            res.render('index.ejs', {savedOutfits: results})
            console.log(results)
            console.log("yooo")

          })
          .catch(err => {
            console.error(err)
          })
      })   

      app.post('/addOutfit', (request, response) => {
        db.collection('savedOutfits').insertOne({
            title: "blah"
        })
        .then(result => {
            console.log('Outfit Added')
            response.redirect('/')
        })
        .catch(error => console.error(error))
    })

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})