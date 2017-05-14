const fs = require('fs');
module.exports = (pathfile, isSync) => {
    if (isSync == false) {
        fs.readFile(pathfile, (err, data) => {
            (err) ? console.error(err): '';
            console.log('Asynchronous read: ' + data.toString());
        });
    } else {
        var data = fs.readFileSync(pathfile);
        console.log('Synchronous read: ' + data.toString());
    }
}