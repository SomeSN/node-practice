const csvToJson = require('csvtojson')
const fileStream = require('fs')
let array = []
csvToJson()
	.fromFile('customer-data.csv')
	.on('json', (jsonObj)=>{
		array.push(jsonObj)
	})
	.on('done',(error)=>{
		if(error){
			console.log('Something went wrong with the csv reading and conversion.')
		} else {
			fileStream.writeFile('customer-data.json',JSON.stringify(array, null, 2), (error)=>{
				if(error){
					console.log('Something went wrong with the json writing.')
				} else {
					console.log('Done')
				}
			}
		)
	}
})