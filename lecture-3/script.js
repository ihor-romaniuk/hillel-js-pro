// let name = prompt('Как вас зовут?');
// let age = +prompt('Сколько вам лет?');


// switch (`${name} - ${age}`) {
//     case 'Kate - 15':
//     case 'John - 20':
//     case 'Jack - 30':
//         alert(`Привет , ${name} - ${age}`);
//         break;
//     default:
//         alert('Кто вы?!');
// }


// if (name === 'Kate' && age === 15 ||
//     name === 'John' && age === 20 ||
//     name === 'Jack' && age === 30) {
//     alert(`Привет , ${name} - ${age}`);
// } else {
//     alert('Кто вы?!');
// }


const name = prompt('Введите имя');

for (let i = 0; name && i < name.length; i++) {
    if (name[i] === 'A' || name[i] === 'a') continue;
    console.log(name[i]);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// let a = 5;
// while (a) {
//     console.log(a);
//     --a;
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let a = 5;

// while (a) {
//     console.log(a);
//     --a;
// }


// do {
//     console.log(a);
//     --a;
// } while (a);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }


// let i = 3;

// for (; i > 3; i++) {
//
// }

// for (; ; i++) {
//     if (i > 3) break;
// }

// for ( ; ; ) {
//     if (i > 3) break;
//     i++;
// }


// let k = 0;
// for (let i = 0; i > 3; i++, k = i + 1) {
//
// }


// for (let i = 0; i < 10; i++) {
//     if (i * 2 > 10) continue;
//     console.log(i)
// }


// outer:
// for (let i = 0; i < 10; i++) {
//     let k = 5;
//     for (let j = 0; j < 10; j++) {
//         if (j > 5) {
//             break;  // внутренний break;
//         } else {
//             continue outer;
//             /*
//             останавливается текущая итерация и начинаем
//             следующую итерацию внешнего цикла
//             */
//         }
//     }
// }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
