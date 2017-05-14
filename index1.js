console.log("hello world!");

const http = require('http');
const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('hello world');
});
server.listen(8000);