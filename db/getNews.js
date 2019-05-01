const axios = require('axios')
const fs = require('fs')


let baseURL = 'https://newsapi.org/v2/top-headlines?category=sports&apiKey=5cff8c2357a24e4d9d7618d55a8dd110&country=us'
let newsCount = 1

let ids = []

// build array of random ids
for(let i = 0; i < newsCount; i++) {
	let rand = Math.floor(Math.random() * 10000)
	ids.push(rand)
}

// build 20 urls to make calls to, and return array of promises with those urls
let calls = ids.map(id => `${baseURL}`)
.map(url => axios.get(url))

// execute all promises, writing to disk if successful
Promise.all(calls)
.then(success => {
	let collectedData = success.map(res => res.data)
	let stringified = JSON.stringify(collectedData)
	fs.writeFile(__dirname + '/news.json', stringified, 'utf8', (err) => {
		if(err) {
			console.error(err)
		}
		else {
			console.log(`successfully wrote records to db/news.json`)
		}
	}) 
})
.catch(err => {
	console.error(err)
	console.error('there was probably an issue with the rate limit, try again in 10 seconds or check the error messages above.')
})
