const fs = require('fs');
module.exports = (filepath, isSync) => {
    console.log('Going to get file info!');
    if (isSync == false) {
        fs.stat(filepath, (err, stats) => {
            (err) ? console.error(err): '';
            console.log(stats);
            console.log('Got Asynchronous file info successfully!');

            // Check file type
            console.log('isFile: ' + stats.isFile());
            console.log('isDirectory: ' + stats.isDirectory());
            console.log('isBlockDevice: ' + stats.isBlockDevice());
            console.log('isCharacterDevice: ' + stats.isCharacterDevice());
            console.log('isSymbolicLink: ' + stats.isSymbolicLink());
            console.log('isFIFO: ' + stats.isFIFO());
            console.log('isSocket: ' + stats.isSocket());
        })
    } else {
        var stats = fs.statSync(filepath);

        console.log(stats);
        console.log('Got Synchronous file info successfully!');

        // Check file type
        console.log('isFile: ' + stats.isFile());
        console.log('isDirectory: ' + stats.isDirectory());
        console.log('isBlockDevice: ' + stats.isBlockDevice());
        console.log('isCharacterDevice: ' + stats.isCharacterDevice());
        console.log('isSymbolicLink: ' + stats.isSymbolicLink());
        console.log('isFIFO: ' + stats.isFIFO());
        console.log('isSocket: ' + stats.isSocket());
    }
}