var readDir = require('./utils/readDir');
//readDir('files/', true);
//readDir('./', false);

var createDir = require('./utils/createDir');

function createdirectory() {
    return new Promise(r => {
        createDir('files/temp', 0777, true);
        createDir('files/temp/subtemp', 0777, false);
    });
}

var delDir = require('./utils/delDir');

function deletedirectory() {
    return new Promise(r => {
        delDir('files/temp/subtemp', true);
        delDir('files/temp', false);
    });
}

//createdirectory().then(readDir('files/temp', false)).then(deletedirectory()).then(readDir('files/temp', false));