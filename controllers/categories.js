const express = require("express")
const router = express.Router()

const Categories = require('../db/models/Categories')

router.get('/', (req, res) => {
    Categories.find({})
      .then(cat => {
        res.json(cat)
      })
  })

  
  router.post('/', (req, res) => {
    Categories.create(req.body)
      .then(cat => {
        res.json(cat)
      })
    })

    router.put('/', (req, res) => {
        Categories.findOne({name: req.params.name}, req.body)
          .then(cat => {
            res.json(cat)
          })
      })

      router.delete('/', (req, res) => {
        Categories.delete({name: req.params.name})
          .then(cat => {
            res.json(cat)
          })
      })

module.exports = router