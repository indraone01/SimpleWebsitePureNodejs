var watchFile = require('./utils/watchFile');
var readFile = require('./utils/readFile');
//readFile('files/input.txt', false);
//readFile('files/input.txt', true);

var openFile = require('./utils/openFIle');
//openFile('files/input.txt', 'r+', false,'');
//openFile('files/input.txt', 'r+', true,'');

var statsFile = require('./utils/getFIleInfo');
//statsFile('files/input.txt', false);
//statsFile('files/input.txt', true);

var writeFile = require('./utils/writeFile');
writeFile('files/input.txt', 'Hello World!', true, 'w',
    readFile('files/input.txt', false));
writeFile('files/input.txt', '\nSimply Easy Learning to Write File Ansynchronous!', false, 'a+',
    readFile('files/input.txt', false));
writeFile('files/input.txt', '\nSimply Easy Learning to Write File Synchronous!', true, 'a+',
    readFile('files/input.txt', false));


openFile('files/input.txt', 'r+', false, 5);
openFile('files/input.txt', 'r+', true, 10);

var delFile = require('./utils/delFile');
//delFile('files/input.txt', false);