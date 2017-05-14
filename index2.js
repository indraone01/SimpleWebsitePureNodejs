console.log('start');

const http = require('http');
const fs = require('fs');
const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('./index.html', (err, file) => {
        (err) ? console.log(err): response.end(file);
    });
});
server.listen(8000);