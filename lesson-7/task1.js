/* Завдання 1
    Створіть функцію handleNum яка буде приймати 3 параметри.
        -число
        -Колбек функцію яку треба викликати якщо передане число парне
        -Колбек функцію яку треба викликати якщо передане число непарне

    Створіть ще дві функції які ви будете передавати у якості колбеків, наприклад handleEven та handleOdd.
    Кожна з них має виводити просте повідомлення в консоль. Наприклад handleEven буде виводити текст “number is even”,
    a handleOdd буде виводити текст “number is odd”

    Викличте функцію handleNum і передайте в якості аргументів довільне число і дві функції які ви створили раніше
*/

const handleNum = (inputNumber, handleEven, handleOdd) => {
	return inputNumber % 2 === 0 ? handleEven(inputNumber) : handleOdd(inputNumber);
};

const handleEven = (inputNumber) => {
	// Чётное число
	console.log(`${inputNumber} - number is even`);
};

const handleOdd = (inputNumber) => {
	console.log(`${inputNumber} - number is odd`);
};

handleNum(10, handleEven, handleOdd);
handleNum(11, handleEven, handleOdd);
