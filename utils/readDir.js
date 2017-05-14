const fs = require('fs');
module.exports = (pathdir, isSync) => {
    console.log("Going to read directory " + pathdir);
    if (isSync == false) {
        fs.readdir(pathdir, (err, files) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    console.error(pathdir + ' does not exist');
                    return;
                }
            } else {
                files.forEach((file) => {
                    console.log(file);
                });
                console.log(pathdir + " read Asynchronous directory successfully!");
            }
        });
    } else {
        if (fs.existsSync(pathdir)) {
            var files = fs.readdirSync(pathdir);
            files.forEach((file) => {
                console.log(file);
            });
            console.log(pathdir + " read Synchronous directory successfully!");
        } else {
            console.error(pathdir + ' does not exist');
            return;
        }
    }
}