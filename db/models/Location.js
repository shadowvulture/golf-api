const mongoose = require('../connection')

const LocationSchema = new mongoose.Schema({
    address: String,
    lat: Number,
    lng: Number,
    city: String,
    state: String,
    formattedAddress: [String]
})

// let location = mongoose.model('Location', LocationSchema)

module.exports = LocationSchema