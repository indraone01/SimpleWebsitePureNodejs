//mode− This is the directory permission to be set.Defaults to 0777.
const fs = require('fs');
module.exports = (pathdir, mode, isSync) => {
    console.log("Going to create directory " + pathdir);
    (mode && mode == '') ? mode = 0777: '';
    if (isSync == false) {
        fs.mkdir(pathdir, mode, (err) => {
            if (err) {
                if (err.code === 'EEXIST') {
                    console.error(pathdir + ' already exists');
                    return;
                }
            } else {
                console.log(pathdir + " Directory Asynchronous created successfully!");
            }
        });
    } else {
        if (fs.existsSync(pathdir)) {
            console.error(pathdir + ' already exists');
            return;
        } else {
            fs.mkdirSync(pathdir, mode);
            console.log(pathdir + " Directory Synchronous created successfully!");
        }

    }
}