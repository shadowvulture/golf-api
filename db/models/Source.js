const mongoose = require('../connection')

const SourceSchema = new mongoose.Schema({
        source: [{
            id: String,
            name: String,
            article: [{
                ref: "Article",
                type: mongoose.Schema.Types.ObjectId
        }]
    }]
})

let source = mongoose.model('Source', SourceSchema)

module.exports = source