// import userJSON from './user';

// ------ Object -------------------------------------------------------------------------------------------

let person = {
    name: 'Ihor',
    age: 20
};


// if (person.name)
//     console.log(person.name);


// for (let key in person) {
//     console.log(key, person[key]);
// }


// console.log( Object.keys(person));


// ------- клонирование объекта ------------------------------------------------------------------------------------------


let user1 = {name: 'John', age: 20};
let user2 = {};

// #1
// for (let key in user1) {
//     user2[key] = user1[key];
// }

// #2
// user2 = Object.assign({}, user1);

// #3
user2 = {...user1};


// console.log(user2);


// ------ деструктуризация -------------------------------------------------------------------------------------------

let {name, age} = user1;
let {name: userName, age: userAge, job: userJob = 'IT'} = user2;

// console.log(name, age);
// console.log(userName, userAge, userJob);


// ------ JSON -------------------------------------------------------------------------------------------

const userJSON = {
    "firstName": "John",
    "last name": "Doe",
    "age": 20
};


// from JSON
// console.log(JSON.stringify(userJSON));  // {"firstName":"John","last name":"Doe","age":20}

// to JSON
const toJSON = JSON.parse('{"firstName":"John","last name":"Doe","age":20}');
// console.log(toJSON);  // {firstName: "John", last name: "Doe", age: 20}


// ------ Array -------------------------------------------------------------------------------------------


const arr1 = [];  // []
const arr2 = new Array('first', 'second');  // ['first', 'second']
const arr3 = new Array(4);   // [,,,]


// ------ Array -------------------------------------------------------------------------------------------


let food = ['potato', 'tomato', 'banana'];

food.push('cucumber');  // 4 (добавление в конец)

food[food.length] = 'carrot';  // 5 (добавление в конец)

food.unshift('cabbage'); // 6 (добавление в начало)

// удаление эл-тов

food.pop();  // удаление последнего эл-т и возвращает его

food.shift();  // удаление первый эл-т и возвращает его

food.slice(3, 1);  // удаление с 3го эл-та и длину 1 (количество) и возвращает массив удаленных эл-тов

// console.log(food);


// ------ перебор массива -------------------------------------------------------------------------------------------


// for (let i = 0; i < food.length; i++) {
//     console.log(food[i]);
// }


// for (let key of food) {
//     console.log(key);
// }


// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];
//
// for (let i = 0; i < matrix.length; i++) {
//     console.log(matrix[i]);
//
//     for (let j = 0; j < matrix[i].length; j++) {
//         console.log(matrix[i][j]);
//     }
// }


// ------ Задание -------------------------------------------------------------------------------------------

const arr = [
    ['potato', 'banana', 'tomato'],
    [15, 10, 5],
    ['John', 'Kate', 'Jack']
];

let total = '';

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if ((i == 0 || i == 1) && j == 2) total += arr[i][j] + ' - ';
        if (i == 2 && j == 1) total += arr[i][j];
    }
}

// console.log(total);  // tomato - 5 - Kate



// ------ копирование и сравнение массива -------------------------------------------------------------------------------------------


const a = [1, 2, 3];
const b = [];

// for (let key in a) {
//     b[key] = a[key];
// }

// const c = a.slice();

// const d = [...a];

// console.log(c);


// ------ деструктуризация -------------------------------------------------------------------------------------------


let [number1, , number3] = a;
// console.log(number1, number3);  // 1 3


let [numberNew, ...arrNew] = a;
// console.log(numberNew, arrNew);  // 1 [2, 3]


// ------ преобразование объектов -------------------------------------------------------------------------------------------

let obj = {};
let numberArr = [1, 2, {}];

// console.log(2 + obj); // 2[object Object]
// console.log(2 + numberArr); // 21,2,[object Object]


// ------ численное преобразование -------------------------------------------------------------------------------------------

// console.log(+{});  // NaN


