const mongoose = require('mongoose')

mongoose.Promise = Promise

if (process.env.NODE_ENV == "production") {
	mongoose.connect(process.env.DB_URL)
  } else {
	mongoose.connect("mongodb://localhost/news")
  }


// mongoose.connect('mongodb://localhost/news', { useNewUrlParser: true })
// .then((conn) => {
// 	console.log(`connected to mongodb on ${conn.connections[0].name} db`)
// })
// .catch(err => {
// 	console.error(err)
// })



module.exports = mongoose


