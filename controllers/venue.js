const express = require("express")
const router = express.Router()

const Venue = require('../db/models/Venue')

router.get('/', (req, res) => {
    Venue.find({})
      .then(place => {
        res.json(place)
      })
  })

  router.get('/:name', (req, res) => {
    let courseName = req.params.name
    Venue.findOne({ name: courseName }).then(doc => {
        res.json(doc)
    })
})

  router.post('/', (req, res) => {
    Venue.create(req.body)
      .then(place => {
        res.json(place)
      })
    })

 router.put('/:id', (req, res) => {
    Venue.findOneAndUpdate({_id: req.params.id}, req.body)
   .then(updated => {
       res.json(updated)
   })
}) 

    router.delete('/:name', (req, res) => {
      Venue.deleteOne({name: req.params.name})
        .then(deleted => {
          res.json(deleted)
        })
    })


module.exports = router