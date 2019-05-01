const news = require('./news.json')
const article = require('../db/models/Article.js')
const source = require('../db/models/Source.js')

article.remove({})

// person.create(people).then(() => {
//     console.log('works')
// })

article.collection.insert(news)
  .then(article => {
    console.log(news)
  })
  .catch(err => {
    console.log(err)
  })


  source.remove({})

  // person.create(people).then(() => {
  //     console.log('works')
  // })
  
  source.collection.insert(news)
    .then(show => {
      console.log(news)
    })
    .catch(err => {
      console.log(err)
    })