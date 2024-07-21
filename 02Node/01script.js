// http and https
// http.createServer([options][, requestListener])
const http = require('http');
const server = http.createServer(function (req, res) {
    res.end("Hello world");
})

server.listen(3000);