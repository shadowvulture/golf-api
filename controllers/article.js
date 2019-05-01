const express = require("express")
const router = express.Router()

const Article = require('../db/models/Article')

router.get('/', (req, res) => {
    Article.find({})
      .then(piece => {
        res.json(piece)
      })
  })

module.exports = router