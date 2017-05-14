const fs = require('fs');
/*
    Flag 	Description
    r 	Open file for reading. An exception occurs if the file does not exist.
    r+ 	Open file for reading and writing. An exception occurs if the file does not exist.
    rs 	Open file for reading in synchronous mode.
    rs+ 	Open file for reading and writing, asking the OS to open it synchronously. See notes for 'rs' about using this with caution.
    w 	Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
    wx 	Like 'w' but fails if the path exists.
    w+ 	Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
    wx+ 	Like 'w+' but fails if path exists.
    a 	Open file for appending. The file is created if it does not exist.
    ax 	Like 'a' but fails if the path exists.
    a+ 	Open file for reading and appending. The file is created if it does not exist.
    ax+ 	Like 'a+' but fails if the the path exists.
*/
module.exports = (filepath, string, isSync, strflag, callbaks) => {
    var options = {
        encoding: 'utf8',
        mode: 0o666,
        flag: (strflag && strflag != '') ? strflag : 'w'
    }
    console.log("Going to write into existing file");
    if (isSync == false) {
        fs.writeFile(filepath, string, options, (err) => {
            (err) ? console.error(err): '';

            console.log("Data Asynchronous written successfully!");
            console.log("Let's read newly written data");
            (typeof callbaks == 'function') ? callbaks(): '';
        });
    } else {
        fs.writeFileSync(filepath, string, options);

        console.log("Data Synchronous written successfully!");
        console.log("Let's read newly written data");
        (typeof callbaks == 'function') ? callbaks(): '';
    }
}