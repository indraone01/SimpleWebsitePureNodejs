const fs = require('fs');

module.exports = (sourcePath, sourcePipe) => {
    //var stream = fs.createReadStream(sourcePath);
    //stream.pipe(sourcePipe);

    var stream = {
        buffer: null,
        read: (readPath) => { this.buffer = fs.createReadStream(readPath) },
        write: (readPath, writePath, chunck) => {
            fs.createWriteStream(writePath + '/backups_' + readPath.replace('./', '') + '_' + new Date().toString()).write(chunck);
        },
        pipe: (resPipe) => { this.buffer.pipe(resPipe) },
        backups: (sourcePath, destPath) => {
            /*fs.createReadStream(sourcePath).on('data', (chunck) => {
                fs.createWriteStream(destPath + '/backups_' + sourcePath.replace('./', '') + '_' + new Date().toString()).write(chunck);
            });*/

            this.buffer.on('data', (chunck) => {
                stream.write(sourcePath, destPath, chunck);
            });
        }
    }

    stream.read(sourcePath);
    stream.pipe(sourcePipe);

    // backups file
    (!fs.existsSync('./backups')) ? fs.mkdirSync('./backups'): '';
    stream.backups(sourcePath, './backups');
}