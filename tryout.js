function pola_ok(pola, str) {
    // kode disini
    //return true / false;
    var isboolean = false;
    var arrpola = new Array();
    var arrpolacheck = new Array();
    arrpola = pola.split('');
    arrpolacheck = arrpola.slice();
    var arrstr = str.split(' ');
    var arrstrcheck = arrstr.slice();
    var isnotmatch = 0;

    for (var i = 0; i <= arrpola.length - 1; i++) {
        console.log(arrpola[i])
        for (var j = 0; j <= arrpolacheck.length - 1; j++) {
            if (arrpola[i] == arrpolacheck[j] && i != j) {
                if (arrstr[i] == arrstrcheck[j]) {
                    console.log('true for ' +
                        i + ':' + arrpola[i] + '==>' + arrstr[i] + ',' + j + ':' + arrpolacheck[j] + '==>' + arrstrcheck[j])
                } else {
                    console.log('false for ' +
                        i + ':' + arrpola[i] + '==>' + arrstr[i] + ',' + j + ':' + arrpolacheck[j] + '==>' + arrstrcheck[j])
                    isnotmatch++
                }
            } else {
                if (arrstr[i] == arrstrcheck[j] && i != j) {
                    console.log('false for ' +
                        i + ':' + arrpola[i] + '==>' + arrstr[i] + ',' + j + ':' + arrpolacheck[j] + '==>' + arrstrcheck[j])
                    isnotmatch++
                }
            }
        }
    }
    (isnotmatch > 1) ? console.log('false'): console.log('true');
};
pola_ok('bbba', 'sayam ayam sayam ayam');

function ajaib(str) {
    // lengkapi
    // return false/true
    var bil = str.split('');
    var hasil = 0;
    var stringbil = '';
    if (bil.length > 1) {
        for (var i = 0; i <= bil.length - 1; i++) {
            hasil = hasil + Math.pow(bil[i], 2);

            if (i == bil.length - 1) {
                stringbil = stringbil + bil[i] + ' pangkat 2 = ' + hasil;
            } else {
                stringbil = stringbil + bil[i] + ' pangkat 2 + '
            }

        }

        console.log(stringbil);
        if (hasil == 1) {
            console.log('true')
        } else {
            ajaib(hasil.toString())
        }
    } else {
        console.log('Wrong format number!');
    }
};
// Contoh:
ajaib("18"); // output: true

function sampoerna(str) {
    // diisi sesuatuhh...
    // return false/true
    var isFoundMatch = 0;
    var loopcheck = 0;
    var arrkurung = str.split('')
    for (var i = 0; i <= arrkurung.length - 1; i++) {
        console.log(arrkurung[i] + arrkurung[i + 1])
        if (arrkurung[i] + arrkurung[i + 1] == '{}' || arrkurung[i] + arrkurung[i + 1] == '()' ||
            arrkurung[i] + arrkurung[i + 1] == '[]') { isFoundMatch++; }
        i++;
        loopcheck++;
    }
    if (isFoundMatch != loopcheck) {
        return 'kamu hanya manusia (false)';
    } else {
        return 'true'
    }
};
// contoh:
console.log(sampoerna("{([[)}")); // output: kamu hanya manusia (false)
console.log(sampoerna("()[]{}")); // output: kamu hanya manusia (false)
console.log(sampoerna("()[]{}[")); // output: kamu hanya manusia (false)