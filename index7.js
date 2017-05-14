const fs = require('fs');
fs.readFile('files/file.csv', (err, data) => {
    (err) ? console.error(err): '';
    //console.log('Asynchronous read :' + data.toString());
});

fs.readFile('files/input.txt', (err, data) => {
    (err) ? console.error(err): '';
    //console.log('Asynchronous read :' + data.toString());
});

var dataSync = fs.readFileSync('files/file.csv');
console.log('Synchronous read: ' + dataSync.toString());

dataSync = fs.readFileSync('files/input.txt');
console.log('Synchronous read: ' + dataSync.toString());