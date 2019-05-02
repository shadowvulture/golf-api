const express = require("express")
const router = express.Router()

const Location = require('../db/models/Location')

router.get('/', (req, res) => {
  Location.find({})
    .then(add => {
      res.json(add)
    })
})
  router.get('/:address', (req, res) => {
    let add = req.params.address
    Location.findOne({ address: add }).then(doc => {
        res.json(doc)
    })
})

  router.post('/', (req, res) => {
    Location.create(req.body)
      .then(loc => {
        res.json(loc)
      })
    })

    router.put('/', (req, res) => {
      Location.findOne({address: req.params.address}, req.body)
        .then(loc => {
          res.json(loc)
        })
    })

    router.delete('/', (req, res) => {
      Location.delete({address: req.params.address})
        .then(loc => {
          res.json(loc)
        })
    })



module.exports = router