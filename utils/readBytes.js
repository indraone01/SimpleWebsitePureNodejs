const fs = require('fs');
var buf = new Buffer(1024);
module.exports = (fd, isSync) => {
    console.log("Going to read the file");
    if (isSync == false) {
        fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
            (err) ? console.error(err): '';
            console.log(bytes + " Asynchronous bytes read");
            (bytes > 0) ? console.log(buf.slice(0, buf.length).toString()): '';
        });
    } else {
        var bytes = fs.readSync(fd, buf, 0, buf.length, 0);
        if (bytes > 0) {
            console.log(bytes + " Synchronous bytes read");
            console.log(buf.slice(0, buf.length).toString());
        }
    }
}