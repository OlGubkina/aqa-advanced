/*
Завдання 3: Числа та булі
Створіть змінну яка буде символізувати вік певної персони.
Після чого створіть булеву змінну яка буде визначати чи особа повнолітня базуючись на заченні з попередньої змінної.
Виведіть усі змінні в консоль
 */

let ageOfPerson = 22;
let isAdult = false;

isAdult = ageOfPerson >= 18; // => isAdult = ageOfPerson>=18 ? true : false;

console.log(`Age: ${ageOfPerson} => ${isAdult? "Adult" : "Kid"}`);