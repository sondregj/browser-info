const
	http = require('http'),
	https = require('https'),
	express = require('express'),
	useragent = require('express-useragent')
	
const port = process.env.PORT || 8080

const app = express()

app.use(useragent.express())

app.get('/api/whoami', (req, res) => {
	res.json({
		ipaddress: req.ip,
		language: req.acceptsLanguages()[0],
		software: req.useragent.platform + ', ' + req.useragent.os
	})
})

http // Start HTTP server
	.createServer(app)
	.listen(port, () => console.log('HTTP listening on port', port))
