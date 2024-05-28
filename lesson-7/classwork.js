let person = {
    name: 'Alice',
    age: 25,
    skills: ['Cypress', 'JS'],
    premiumSub: {
        isPremium: true
    }
}
    person.surname = 'Anderson' // можно добавить свойство объекту
// console.log(person); // распечатает все свойства объекта


// callback-функция - это функция, которая передаётся в другую функцию как аргумент.
// HOF - Higher-ordered Functions - это функция, в которую мы передаём callback

function callback() {
    console.log(`callB function`);
}

function someF(callBackArgument) {
    callBackArgument();
}

someF(callback);

function showFullPrice(orderData) {
    console.log(`Price = ${orderData.price}`);
}

function fetchOrderData(callback) {
    let orderData = {
        user: 'Jack',
        price: 100,
        discount:5
    }
    callback(orderData);
}

fetchOrderData(showFullPrice);



let printMsg = (callback, num) => {
    const isNumOdd = callback(num);
    console.log(`The number ${num} is an odd number: ${isNumOdd}.`)
}

// Pass in isEven as the callback function
printMsg(isOdd, 5);
// Prints: The number 4 is an odd number: True.




/*
... вопросы
1. гит. Как создать папку?
*/