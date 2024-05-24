/*
Завдання 2
Створіть функцію яка приймає один параметр: age.
Усередині функції перевірте, чи age більше або рівне 18.
Якщо age відповідає умові, поверніть true, інакше поверніть false.
Викличте вашу функцію з аргументами 25 і 15, і виведіть результат (чи є особа дорослою)
в консоль для кожного випадку.
*/

const isAdult = (age) => {
    if (age === false || age === null || isNaN(age) || age === undefined) {
        console.log(`${age} - Incorrect value`);
        return false;
    }

    if (age <= 0 || age > 120) {
        console.log(`${age} - Incorrect number`);
        return false;
    }

    if (age >= 18 && age <= 120) {
        console.log(`${age} - Adult person`);
        return true;
    }

    if (age < 18) {
        console.log(`${age} - Still a child`);
        return false;
    }
    else {
        console.log(`${age} - (!) Incorrect value`);
        return false;
    }
}

isAdult(25);
isAdult(15);
isAdult(0);
isAdult(125);
isAdult(-3);
isAdult(false);
isAdult(NaN);
isAdult(undefined);
isAdult(null);