const fs = require('fs');
module.exports = (fd, isSync) => {
    if (isSync == false) {
        fs.close(fd, (err) => {
            (err) ? console.error(err): '';
            console.log("File Asynchronous closed successfully.");
        });
    } else {
        fs.closeSync(fd);
        console.log("File Synchronous closed successfully.");
    }
}