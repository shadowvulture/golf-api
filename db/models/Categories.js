const mongoose = require('../connection')


const CategorySchema = new mongoose.Schema({
    id: String,
    name: String,
})

// let Category = mongoose.model('Venue', CategorySchema)

module.exports = CategorySchema