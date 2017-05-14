const util = require('util')
const http = require('http')

const server = http.createServer(function(req, res) {
    setTimeout(function() {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('hay buddy!');
    }, 2000);
});
server.listen(8000);