const express = require("express")
const router = express.Router()

const Categories = require('../db/models/Categories')

router.get('/', (req, res) => {
    Categories.find({})
      .then(cat => {
        res.json(cat)
      })
  })

module.exports = router