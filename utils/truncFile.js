const fs = require('fs');
module.exports = (fd, len, isSync) => {
    if (isSync == false) {
        fs.ftruncate(fd, len, (err) => {
            (err) ? console.error(err): '';
            console.log("File Asynchronous truncated successfully." + fd);
        });
    } else {
        fs.ftruncateSync(fd, len);
        console.log("File Synchronous truncated successfully." + fd);
    }
}