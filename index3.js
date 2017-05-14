setInterval(() => console.log('hello'), 1000);
setInterval(() => {
    console.log('world');
    var count = 1;
    while (count > 10) { count++ }
}, 1000);
console.log('starting');