/* Завдання 1: Відстеження кількості позитивних, негативних та нульових чисел
    Створіть масив чисел за допомогою конструкції const numbers = [2, -5, 0, 7, -3, 0, 10, -8].

    Задайте змінні positiveCount, negativeCount та zeroCount зі значенням 0.
    Вони будуть використовуватись для відстеження кількості позитивних, негативних та нульових чисел в масиві.

    Використовуючи цикл for, пройдіться по кожному елементу масиву numbers.

    Перевірте чи число позитивне, негативне чи нульове, та збільште відповідну змінну (positiveCount, negativeCount або zeroCount) на 1.
    Після завершення циклу виведіть значення змінних positiveCount, negativeCount та zeroCount на консоль.
*/

// const numbers = [2, -5, 0, 7, -3, 0, 10, -8];
const numbers = [2, -5, 0, "a", "str", undefined, -Infinity, null, Infinity, false, 3, 5, 6, 8, -7, -8, -9, 0, 0, 0];

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

numbers.forEach((number) => {
	try {
		if (number === Infinity || number === -Infinity || number === null || number === false)
			{throw `${number} >>> Not a number`;}
		else if (!isNaN(number)) {
			if (number === 0) {zeroCount++;}
			else {number > 0 ? positiveCount++ : negativeCount++;}
		}
	} catch (e) {
		console.log(`Caught the error! >>> ${e}`);
	}
});

console.log(`Source array: ${numbers}
        Positive counter = ${positiveCount}
        Negative counter = ${negativeCount}
        Zero counter = ${zeroCount}`);
