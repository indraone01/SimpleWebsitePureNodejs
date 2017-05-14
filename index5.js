// using callback hell
function concat(a, b, callback) {
    setTimeout(function() {
        var r = a + b;
        callback(r);
    }, 0);
}

function upper(a, callback) {
    setTimeout(function() {
        var r = a.toUpperCase();
        callback(r);
    }, 0);
}

function decorate(a, callback) {
    setTimeout(function() {
        var r = '*' + a + '*';
        callback(r);
    }, 0);
}

concat('hello', 'world', r => {
    upper(r, u => {
        decorate(u, d => {
            console.log(d);
        });
    });
});

// using promise
function concatP(a, b) {
    return new Promise(resolve => {
        concat(a, b, resolve);
    });
}

function upperP(a) {
    return new Promise(resolve => {
        upper(a, resolve);
    });
}

function decorP(a) {
    return new Promise(resolve => {
        decorate(a, resolve);
    });
}

concatP('hello', 'world')
    .then(upperP.bind(this))
    .then(decorP.bind(this))
    .then(console.log);

function a(p, s, callback) {
    r = p * s
    callback(r)
}

function b(p, s, callback) {
    r = p + s;
    callback(r);
}

a(2, 3, r => {
    b(r, 4, r => { console.log(r) })
})


function aP(p, s) {
    return new Promise(r => {
        a(p, s, r)
    });
}

function bP(p, s) {
    return new Promise(r => {
        (isNaN(s)) ? s = 5: '';
        b(p, s, r)
    });
}

aP(5, 6).then(bP.bind(this, 6)).then(console.log)