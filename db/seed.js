const news = require('./news.json')
const Venue = require('./models/Venue.js')
const Location = require('./models/Location.js')
const Categories = require('./models/Categories.js')



Venue.remove({}).then(() => {
  Venue.create(news)
  .then(place => {
    console.log(news)
  })
  .catch(err => {
    console.log(err)
  })

})

// Location.remove({}).then(() => {
//   Location.create(news)
//   .then(loc => {
//     console.log(news)
//   })
//   .catch(err => {
//     console.log(err)
//   })

// })

