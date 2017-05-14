//index.js
var greet = require('./greeter')

greet('ema')

var person = require('./exportobject');
console.log(person.name);
console.log(person.getFullName());
console.log(person.getDate().executionTime);