// let div = document.createElement('div');
// let textHello = document.createTextNode('Hello');
// let htmlDiv = document.querySelector('div');
// let a = document.createElement('a');
//
// div.innerHTML = '<p>Hello World!</p>';
// a.innerHTML = '<b>Hello World!</b>';
//
// let b = a.querySelector('b');
//
// // htmlDiv.parentNode.replaceChild(a, htmlDiv);
//
// // a.removeChild(b);
//
// let secondLink = a.cloneNode(true);
//
// secondLink.innerHTML += '<p>Bye</p>';
//
//
//
//
// console.log('a', a);
// console.log('div', div);
// console.log('textHello', textHello);
// console.log('htmlDiv', htmlDiv);
// console.log('secondLink', secondLink);


// let div = document.querySelector('div');
// let target = document.querySelector('.target');
//
// let text = div.textContent || div.innerText;
//
// console.log(target.previousElementSibling);
// console.log(target.nextElementSibling);
// console.log(target.closest('div'));
// console.log(target.parentNode.firstChild);
//
// // class
// target.classList.add('test2');
// target.classList.remove('hello');
// target.classList.toggle('test3');
// target.classList.toggle('test3');
// target.classList.toggle('test3');
// target.classList.replace('test3', 'test4');
// target.classList.contains('test4'); // true
//
// // attribute
// console.log(target.getAttribute('accesskey')); // get attribute
// console.log(target.setAttribute('accesskey', 'newKeys')); // set attribute
// console.log(target.removeAttribute('accesskey')); // remove attribute
//
// // style
// target.style.background = 'blue';
// target.style['padding'] = '15px';


// ------ Задание -------------------------------------------------------------------------------------------

let block = document.getElementById('task');
let body = document.getElementsByTagName('body');

// 1
let h1Elem = document.createElement('h1');
h1Elem.innerText = 'Dom';
h1Elem.style['color'] = '#fff';
h1Elem.style['background'] = '#000';

block.parentNode.insertBefore(h1Elem, block);

// 2
let link = document.querySelector('a');
let cloneLink = link.cloneNode(true);
block.insertBefore(cloneLink, block.querySelector('p'));

// 3
block.querySelector('p').style['text-align'] = 'center';

// 4
block.dataset.attr = 5;



