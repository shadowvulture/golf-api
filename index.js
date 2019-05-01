const express = require('express')
const app = express()
const articleController = require('./controllers/article')
const sourceController = require('./controllers/source')
const bodyParser = require('body-parser')



app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// app.use('/', (req, res) => {
//     res.redirect('/api/bookmarks/')
// })
app.use('/api/article/', articleController)
app.use('/api/source/', sourceController)

app.listen(8081, () => console.log('They see me rollin...on port 8081...'))