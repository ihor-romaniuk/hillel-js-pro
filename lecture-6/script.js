
// ------ call, apply, bind() -------------------------------------------------------------------------------------------


let user = {
    name: "John",
    age: 15,
    getInfo: function (lastName) {
        return "Hello " + this.name + " " + lastName + " " + this.age;
    },
};

let user2 = {
    name: "Kate",
    age: 20,
};

// console.log(user.getInfo.call(user2, 'myLastName'));
// console.log(user.getInfo.apply(user2, ['myLastName']));
// console.log(user.getInfo.bind(user2, 'curredValue')());


// ------ рекурсия -------------------------------------------------------------------------------------------


function budget(days, totalBudget, dailyBudget) {
    total -= dailyBudget;

    if ( total >= 0 && days > 0 ) {
        days -= 1;
        return budget(days);
    }

    return alert('У вас закончатся деньги на ' + days + ' день!');
}

let days = 5;
let totalBudget = 187;
let dailyBudget = 58;

// budget(days, totalBudget, dailyBudget);
