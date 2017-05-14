const streamFile = require('./utils/streamFile');
const http = require('http');

var server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    streamFile('./index.html', res);
});

server.listen(8000);