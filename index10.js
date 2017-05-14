const http = require('http');
const fs = require('fs');

var con = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var stream = fs.createReadStream('./index.html');
    stream.pipe(res);
});

con.listen(8000);