/* Завдання 4: Відбір парних чисел
    Вам потрібно створити програму, яка відфільтровує парні числа з масиву.
    Ось кроки, які вам потрібно виконати:
    Створіть масив чисел, наприклад, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].
    Cтворіть новий масив, який міститиме лише парні числа.
    Виведіть отриманий масив парних чисел на консоль.
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numbers2 = [];

numbers.forEach((number) => {
	if (number % 2 === 0) {numbers2.push(number);}
	// numbers.filter (number => number%2 === 0);
});

console.log(`Source array: ${numbers}
        Positive array2 = ${numbers2}`);
