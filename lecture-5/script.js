
// ------ функция возвращающая функцию -------------------------------------------------------------------------------------------

function outher() {
    return function () {
        alert('test')
    }
}

// let inner = outher();
// console.log(inner);
// inner();

// ------ анонимная самовызывающаяся функция -------------------------------------------------------------------------------------------

let greeting = (function (name) {
    return "Hi, " + name;
})('Ivan');

// alert(greeting);            // 'Hi, Ivan'
// alert(greeting('Ihor'));    // greeting is not a function


// ------ работа с массивами -------------------------------------------------------------------------------------------

 const arr = [1, 2, 3, 4, 5, 6, 7];

 // перебор (без изменения)
 // arr.forEach((item, index, arr) => {
     // console.log(item, index, arr);
 // });

 // перебор и зменение
 // let arr2 = arr.map((item, index, arr) => {
 //     if (index === 2) return 'hi';
 //     return item * 2;
 // });
 // console.log(arr2)

 // фильтрация
 // let arr3 = arr.filter((item, index, arr) => {
 //     return item < 5;
 // });
// console.log(arr3);

 // проверка совпадений (хотя-бы у одного)
// let arr4 = arr.some((item, index, arr) => {
//      return item === 5;
//  });
// console.log(arr4);  // true

 // проверка совпадений (у всех)
// let arr5 = arr.every((item, index, arr) => {
//      return item === 5;
//  });
// console.log(arr5);  // false

 // поиск (до первого совпадения и возвращает его)
// let arr6 = arr.find((item, index, arr) => {
//      return item > 5;
//  });
// console.log(arr6);  // 6

// изменение и фильтрация
let arr7 = arr.reduce((accumulator, item, index, arr) => {
     return accumulator += item;
 }, (0));
console.log(arr7);  // 6
