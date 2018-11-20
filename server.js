const http = require('http')
http.createServer(function (req, res) {
  console.log(new Date(), req.method, req.url)

  res.writeHead(200, {'Content-Type': 'text/plain'})

  res.end(process.env.HELLO_MSG || 
    'Hello! Please try to set the environment variable: HELLO_MSG!')
}).listen(8080)

console.log('Server listening on :8080...')
