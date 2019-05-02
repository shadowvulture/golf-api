const axios = require('axios')
const fs = require('fs')


let baseURL = 'https://api.foursquare.com/v2/venues/search?ll=38.8,-77.3&client_id=XBHQSN2RNRGVO4EF2QXYYLFCYBTZRS5QZT10P3H0IVLJGAI4&client_secret=WD14GA0S3SSXBWCGS0AJW2UIG4APAEYGNXENBCPKAKUNFHO3&v=20190501&categoryId=4bf58dd8d48988d1e6941735'
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
