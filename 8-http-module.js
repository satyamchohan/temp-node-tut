const http = require('http');

const server = http.createServer((req,res)=>{
	if(req.url === '/'){
		res.end('welcome to our home page')
	}
	if(req.url === '/about'){
		res.end('welcome to our history page')
	}
	res.end(`<h1>opps!</h1>
		<p>we can,t find the page you are looking for</p>
		<a href="/">back to home page</a>`)
})
server.listen(888);