(function() {
    //alert('hello world');

    //var myHeading = document.querySelector('h1')
    var myHeading = document.createElement('h1')
    myHeading.textContent = 'Hello World!';

    var myImg = document.querySelector('img')
    s
    myImg.onclick = function() {
        //alert('hai');
        var mySrc = myImg.getAttribute('src');
        if (mySrc === 'images/firefox-icon.png') {
            myImg.setAttribute('src', 'images/mypic.jpg')
        } else {
            myImg.setAttribute('src', 'images/firefox-icon.png')
        }
    }

    var myDiv = document.createElement('div')
    var myTextNode = document.createTextNode('Hello There! Greetings well!')
    var mySpan = document.createElement('span')
    myDiv.setAttribute('align', 'center');
    mySpan.setAttribute('style', 'font-size:16px;');
    mySpan.appendChild(myTextNode);
    myDiv.appendChild(mySpan);

    //document.body.appendChild(myDiv);
    document.body.insertBefore(myDiv, myHeading);

    var myBtn = document.createElement('input')
    myBtn.setAttribute('type', 'button');
    myBtn.value = 'Set Your Name'

    function setName() {
        var yourName = prompt('Please Enter your name');
        //alert(yourName);
        if (yourName != '') {
            localStorage.setItem('name', yourName)
            myHeading.textContent = 'Hi, My Name is ' + yourName;
            myImg.click();
        }
    }

    myBtn.onclick = function() {
        setName();
    }

    myDiv.appendChild(document.createElement('br'));
    myDiv.appendChild(myBtn)

    if (!localStorage.getItem('name')) {
        myHeading.textContent = 'Hello World!';
    } else {
        myHeading.textContent = 'Hi, My Name is ' + localStorage.getItem('name')
    }

    //alert(localStorage.getItem('name'))

})();