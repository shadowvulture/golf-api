const express = require("express")
const router = express.Router()

const Location = require('../db/models/Location')

router.get('/', (req, res) => {
    Location.find({})
      .then(loc => {
        res.json(loc)
      })
  })

module.exports = router