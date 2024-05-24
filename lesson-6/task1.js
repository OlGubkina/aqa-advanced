/*
Завдання 1
Створіть функцію яка приймає два параметри: width і height.
Усередині функції обчисліть площу прямокутника та поверніть результат з функції.
Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат в консоль.
Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)
*/

/******* Function declaration ***************************************************/
function rectangleAreaDeclaration(width, height) {
    return console.log(`Rectangle's area = ${width * height}`);
    //return width * height;
}
rectangleAreaDeclaration(5,10);

/************ Function expression ***********************************************/
// rectangleAreaExpression(5,10); - нельзя вызвать ф до её создания.
// Can`t access before initialization

const rectangleAreaExpression = function (width, height) {
    console.log(`Rectangle's area = ${width * height}`);
    return width * height;
}
rectangleAreaExpression(5,10);

/******************************* Arrow function *********************************/
const rectangleAreaArrow = (width, height) => {
    console.log(`Rectangle's area = ${width * height}`);
    return width * height;
}
rectangleAreaArrow(5,10);