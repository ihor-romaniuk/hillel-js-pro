class Human {
    constructor(name) {
        this.name = name;
    }

    setName(name) {
        if(name) {
            this.name = name;
        }
    };

    getName() {
        console.log('Имя - ' + this.name);
    };
}

class Person extends Human {
    constructor() {
        super();
        this.age = 25;
    }

    setAge() {
        if (+this.age) {
            this.age = +this.age + 10;
        } else {
            console.log("Вы ввели некорректный возвраст!");
        }
    };

    setName() {
        let newUserName = prompt("Как вас зовут?");

        if (newUserName) {
            super.setName(newUserName);
        } else {
            console.log('Вы не указали имя!');
            super.setName('Anonymous');
        }
    }
}

// let test = new Person();
// test.setAge();
// test.setName();
//
// console.log(test);
