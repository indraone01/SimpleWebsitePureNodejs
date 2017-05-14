console.log('hello world');

const eventEmitter = require('events').EventEmitter;
let emitter = new eventEmitter();
// synchronous example
emitter.on('newNumber', n => console.log(n * 2));
for (let i = 0; i <= 10; i++) {
    emitter.emit('newNumber', i);
}
// ansynchrounous example
emitter.on('newNumber', n => setImmediate(() => console.log(n * 2)));
for (i = 0; i <= 10; i++) {
    emitter.emit('newNumber', i);
}