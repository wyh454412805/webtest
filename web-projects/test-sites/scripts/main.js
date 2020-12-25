// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

let myHeading=document.querySelector('h1')
myHeading.textContent = 'Hello world!'

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/firefox2.png');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

let b = document.querySelector('button');
let h = document.querySelector('h1');

function setUserName() {
    let name = prompt("input your name");
    if (!name || name === null) {
        setUserName();
    } else {
        localStorage.setItem('name',name);
        h.textContent= 'hello' +name;
    }

}

// 初始化代码：在页面初次读取时进行构造工作：
if (!localStorage.getItem('name') ) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }

  b.onclick = function() {
      setUserName()
  }