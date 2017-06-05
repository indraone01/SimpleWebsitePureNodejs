const http = require('http');
const url = require('url');
const fs = require('fs');
var favicon = require('serve-favicon');
var finalhandler = require('finalhandler');
var path = require('path');
var contentMap = require('./contentMap');
console.log(contentMap);

var _favicon = favicon(path.join(__dirname, 'images', 'favicon.ico'));

http.createServer(onRequest).listen(8000, () => {
    console.log('Server has started');
});

function onRequest(req, res) {
    var done = finalhandler(req, res);
    _favicon(req, res, (err) => {
        if (err) return done(err);

        var pathName = url.parse(req.url).pathname;
        //console.log('pathname is ' + pathName);
        showPage(res, pathName);

        res.statusCode = 404;
        res.end('404 Page not found');
    });
}

function showPage(res, pathName) {
    //console.log('pathname is ' + contentMap[pathName]);
    switch (pathName) {
        case '/':
            res.writeHead(200, { 'Content-type': 'text/html' });
            res.end(fs.readFileSync(contentMap[pathName]));
            break;
        case '/styles/w3.css':
            res.writeHead(200, { 'Content-type': 'text/css' });
            res.end(fs.readFileSync(contentMap[pathName]));
            break;
        case '/images/la.jpg':
            res.writeHead(200, { 'Content-type': 'image/jpg' });
            res.end(fs.readFileSync(contentMap[pathName]));
            break;
        case '/images/ny.jpg':
            res.writeHead(200, { 'Content-type': 'image/jpg' });
            res.end(fs.readFileSync(contentMap[pathName]));
            break;
        case '/images/chicago.jpg':
            res.writeHead(200, { 'Content-type': 'image/jpg' });
            res.end(fs.readFileSync(contentMap[pathName]));
            break;
        case '/images/bandmember.jpg':
            res.writeHead(200, { 'Content-type': 'image/jpg' });
            res.end(fs.readFileSync(contentMap[pathName]));
            break;
        case '/images/newyork.jpg':
            res.writeHead(200, { 'Content-type': 'image/jpg' });
            res.end(fs.readFileSync(contentMap[pathName]));
            break;
        case '/images/paris.jpg':
            res.writeHead(200, { 'Content-type': 'image/jpg' });
            res.end(fs.readFileSync(contentMap[pathName]));
            break;
        case '/images/sanfran.jpg':
            res.writeHead(200, { 'Content-type': 'image/jpg' });
            res.end(fs.readFileSync(contentMap[pathName]));
            break;
        default:
            res.writeHead(404, { 'Content-type': 'text/html' });
            res.write('404 Page not found');
            res.end();
            break;
    }
}