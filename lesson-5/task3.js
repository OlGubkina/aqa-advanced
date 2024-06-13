/* Завдання 3: Генерація таблиці множення
Створіть програму, яка генерує таблицю множення для обраного числа від 1 до 10
за допомогою кожного з циклів for, while.
*/

const givenNumber = Math.ceil(Math.random() * 10 + 1);

//FOR
console.log(`Multiplication table for ${givenNumber} using For`);
for (let i = 1; i <= 10; i++) {
	console.log(`${i} * ${givenNumber} = ${i * givenNumber}`);
}

//WHILE
console.log(`Multiplication table for ${givenNumber} using While`);
let i = 1;
while (i <= 10) {
	console.log(`${i} * ${givenNumber} = ${i * givenNumber}`);
	i++;
}
