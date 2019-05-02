const express = require("express")
const router = express.Router()

const Venue = require('../db/models/Venue')

router.get('/', (req, res) => {
    Venue.find({})
      .then(piece => {
        res.json(piece)
      })
  })

module.exports = router