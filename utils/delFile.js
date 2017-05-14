const fs = require('fs');
module.exports = (filepath, isSync) => {
    console.log("Going to delete an existing file");
    if (isSync == false) {
        fs.unlink(filepath, (err) => {
            (err) ? console.error(err): '';
            console.log("File Asynchronous deleted successfully!");
        });
    } else {
        fs.unlinkSync(filepath);
        console.log("File Synchronous deleted successfully!");
    }
}