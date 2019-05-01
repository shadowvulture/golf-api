const express = require("express")
const router = express.Router()

const Source = require('../db/models/Source')

router.get('/', (req, res) => {
    Source.find({})
      .then(src => {
        res.json(src)
      })
  })

module.exports = router