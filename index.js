const express = require('express')
const app = express()
const venueController = require('./controllers/venue')
const locationController = require('./controllers/location')
const categoriesController = require('./controllers/categories')
const bodyParser = require('body-parser')


app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`)
  })
  
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// app.use('/', (req, res) => {
//     res.redirect('/api/bookmarks/')
// })
app.use('/api/venue/', venueController)
app.use('/api/location/', locationController)
app.use('/api/categories/', categoriesController)

app.set("port", process.env.PORT || 3001)



// app.listen(8081, () => console.log('They see me rollin...on port 8081...'))


