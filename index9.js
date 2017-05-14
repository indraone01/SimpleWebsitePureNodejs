const fs = require('fs');
const watcher = fs.watch('./files');

watcher.on('change', (event, filname) => {
    console.log('${event} on file ${filename}');
});