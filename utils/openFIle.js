//fd − This is the file descriptor returned by fs.open()
const fs = require('fs');
var closeFile = require('./closeFIle');
var trunc = require('./truncFile');
var readBytes = require('./readBytes');
var buf = new Buffer(1024);
module.exports = (filepath, flags, isSync, len) => {
    if (isSync == false) {
        fs.open(filepath, flags, (err, fd) => {
            (err) ? console.error(err): '';
            console.log('File Asynchronous opened successfully! ' + fd);
            if (len > 0) {
                trunc(fd, len, isSync);
                readBytes(fd, isSync);
            } else {
                readBytes(fd, isSync);
            }
            closeFile(fd, isSync);
        });
    } else {
        var fd = fs.openSync(filepath, flags);
        console.log('File Synchronous opened successfully! ' + fd);
        if (len > 0) {
            trunc(fd, len, isSync);
            readBytes(fd, isSync);
        } else {
            readBytes(fd, isSync);
        }
        closeFile(fd, isSync);
    }

}