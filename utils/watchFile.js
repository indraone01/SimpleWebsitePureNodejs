const fs = require('fs');
const path = require('path')
const watcher = fs.watch('./files');
const writeLog = require('./writeFile');

module.exports = watcher.on('change', (event, filename) => {
    var fullPath = path.join('./files', filename);
    var parsePath = path.parse(fullPath);
    writeLog('./log.txt', new Date() + ' ' + event + ' on file ' + filename + ' at ' + fullPath + ' ', false, 'a+', () => {
        console.log(new Date() + ' ' + event + ' on file ' + filename + ' at ' + fullPath + ' ');
        console.log(parsePath);
    });
});