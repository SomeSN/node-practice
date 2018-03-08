const https = require('https')
const url = 'https://github.com'
https.get(url, (response) => {
    let webpageText = ''
    response.on('data', (chunk) => {
        webpageText += chunk.toString('utf8')
    })
    response.on('end', () => {
//        console.log(webpageText)
		const h1split = webpageText.split('h1>')
		let arrayOfStuff = []
		h1split.forEach(
			function (element){
				if(typeof element === 'string'){
					if(element.charAt(element.length-2)+element.charAt(element.length-1) === '</'){
						const elementString = element.replace('</', '')
						console.log(element)
					}
				}
			}
		)
//		for(let i = 1; i < h1split.length; i++)
//			arrayOfStuff.push(h1split[i])
/*			if(typeof h1split[i] === 'string'){
				const checkIfH1 = '' + h1split[i].charAt(h1split[i].length-2) + h1split[i].charAt(h1split[i].length-2)
				if(checkIfH1 === '</'){
					checkIfH1.replace('</', '').split.forEach(
						function(element){ arrayOfStuff.push(element) }
					)
				}
			}*/
//		console.log(arrayOfStuff)
    })
}).on('error', (error) => {
    console.error(`Got error: ${error.message}`)
})
/*
Write some code that
    (a) finds all of the words from inside the <h1> tag of a webpage, and
    (b) converts those words into an array.
        So, if a webpage has the following tags:
        ------------------------------------------------------------------------
        <body>
            ...
            <h1>Welcome to Node.js!</h1>
            ......
            <h1>Working with npm</h1>
            ....
            <h1>Installing MongoDB</h1>
            ...
        </body>
        ------------------------------------------------------------------------
        Your array should look like this:
        ['Welcome', 'to', 'Node.js!', 'Working', 'with', 'npm', 'Installing', 'MongoDB']
*/