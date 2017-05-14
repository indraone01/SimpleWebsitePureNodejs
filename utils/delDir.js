const fs = require('fs');
module.exports = (pathdir, isSync) => {
    if (isSync == false) {
        fs.rmdir(pathdir, (err) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    console.error(pathdir + ' does not exist');
                    return;
                }
            } else {
                console.log(pathdir + " Directory Asynchronous deleted successfully!");
            }
        });
    } else {
        if (fs.existsSync(pathdir)) {
            fs.rmdirSync(pathdir);
            console.log(pathdir + " Directory Synchronous deleted successfully!");
        } else {
            console.error(pathdir + ' does not exist');
            return;
        }
    }
}