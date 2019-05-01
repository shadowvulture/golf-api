const mongoose = require('../connection')

const ArticleSchema = new mongoose.Schema({
    author: String,
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    content: String,
    source: [{
        name: String
    }]
})

let person = mongoose.model('Article', ArticleSchema)

module.exports = person