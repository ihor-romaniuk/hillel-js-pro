

function Human(userName) {
    let name;

    this.setName = function (userName) {
        if(userName) {
            name = userName;
        }
    };

    this.getName = function () {
        console.log('Имя - ' + name);
    };
}

function Person(userName, userAge) {
    Human.call(this, userName);

    this.age;

    let humanSetName = this.setName;

    this.setAge = function () {
        if (+userAge) {
            this.age = +userAge + 10;
        } else {
            console.log("Вы ввели некорректный возвраст!");
        }
    };

    this.setName = function () {
        let newUserName = prompt("Как вас зовут?");

        if (newUserName) {
            humanSetName(newUserName);
        } else {
            console.log('Вы не указали имя!');
            humanSetName('Anonymous');
        }
    }
}

const newUser = new Person('Sergey', 15);

newUser.setAge();
newUser.setName();
newUser.getName();

console.log(newUser);
