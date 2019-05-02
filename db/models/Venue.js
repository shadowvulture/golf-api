const mongoose = require('../connection')
const LocationSchema = require('./Location')
const CategoriesSchema = require('./Categories')

const VenueSchema = new mongoose.Schema({
    id: String,
    name: String,
    location: LocationSchema,
    categories: [CategoriesSchema]
})

let venue = mongoose.model('Venue', VenueSchema)

module.exports = venue