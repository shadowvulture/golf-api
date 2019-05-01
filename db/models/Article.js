const mongoose = require('../connection')


const ArticleSchema = new mongoose.Schema({
    author: String,
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    content: String,
    source: [{
        ref: "Source",
        type: mongoose.Schema.Types.ObjectId
    }]
})

let article = mongoose.model('Article', ArticleSchema)

module.exports = article