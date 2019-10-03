// let promise = new Promise(function(resolve, reject) {
//   // Эта функция будет вызвана автоматически
//
//   // В ней можно делать любые асинхронные операции,
//   // А когда они завершатся — нужно вызвать одно из:
//   // resolve(результат) при успешном выполнении
//   // reject(ошибка) при ошибке
// });
// promise.then(onFulfilled, onRejected);
// promise.catch(onRejected); // ловит ошибку

// ------ Промисификация -----------------------------------------------------------------------------------------------

// function httpGet(url) {
//     return new Promise(function(resolve, reject) {
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', url, true);
//
//         xhr.onload = function() {
//             if (this.status == 200) {
//                 resolve(this.response);
//             } else {
//                 var error = new Error(this.statusText);
//                 error.code = this.status;
//                 reject(error);
//             }
//         };
//         xhr.send();
//   	});
// }
// httpGet("https://trevadim.github.io/vue/data/data.json")
//   	.then(
//   	    response => alert(`Fulfilled: ${response}`),
//     	error => alert(`Rejected: ${error}`)
// );

// ------ Чейнинг ------------------------------------------------------------------------------------------------------

// httpGet("https://trevadim.github.io/vue/data/data.json")
//   	.then(response => {
//         return response.user;
//     })
//   	.then(user => {
// 		return getFullInfo(user.id);
//     })
//     .then(info => {
// 	    alert(info);
//     })
//     .catch(error => {
//         alert(error);
//     });

// ------ Метод fetch: замена XMLHttpRequest ---------------------------------------------------------------------------

// fetch("https://trevadim.github.io/vue/data/data.json", options);
// fetch("https://trevadim.github.io/vue/data/data.json")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// ------ try / catch --------------------------------------------------------------------------------------------------

// try {
//     let data = await httpGet("https://trevadim.github.io/vue/data/data.json");
//     console.log('Выведется ответ')
// } catch (error) {
//     console.log('Выведется ошибка')
// } finally {
//     console.log('Выведется к крайнем случае')
// }


// ------ Задание ------------------------------------------------------------------------------------------------------

'use strict';
const url = 'https://trevadim.github.io/vue/data/data.json';
const body = document.querySelector('body');

let createHeader = (text) => {
    let header = document.createElement('header');
    header.innerHTML = `<h1>${text}</h1>`;
    header.style['text-align'] = 'center';
    body.appendChild(header);
};

let createMain = ({ head, paragraph }) => {
    let main = document.createElement('main');
    main.innerHTML = `<h2>${head}</h2>`;
    main.innerHTML += `<p>${paragraph}</p>`;
    main.style['text-align'] = 'center';
    body.appendChild(main);
};

let createMarkup = ({ main }) => {
    createHeader(main.cosmos);
    createMain({ head: main.infoCosmos, paragraph: main.infoFly });
};

fetch(url)
    .then(response => response.json())
    .then(data => createMarkup(data))
    .catch(error => console.log(error));
