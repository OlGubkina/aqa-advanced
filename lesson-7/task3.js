/* Завдання 3
    Створіть функцію divide, яка приймає два параметри: numerator і denominator
    та повертає як результат виконання число отримане від ділення.

    Додайте валідацію в функції. У разі, якщо denominator дорівнює 0
    або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,

    Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок, коли denominator дорівнює 0
    або один з аргументів не є числом.

    Огорніть кожен окремий виклик функції divide в try…catch.

    Використовуючи блок finally, виведіть повідомлення "Робота завершена" в консоль,
    навіть якщо помилка виникла або не виникла.
 */

const divide = (numerator, denominator) => {
	try {
		if (denominator === 0 || denominator === null || denominator === undefined) throw 'Impossible to divide';
		if (isNaN(numerator) || isNaN(denominator)) throw 'Not a numbers were used!';
		console.log(`${numerator} / ${denominator} = ${numerator / denominator}`);
		return numerator / denominator;
	} catch (e) {
		console.log(`Catch the error! >>> ${e}`);
	} finally {
		console.log(`>>> End of the function >>>`);
	}
};

console.log(divide(10, 2));
console.log(divide(10, 0));
console.log(divide(0, 10));
console.log(divide(null, 0));
console.log(divide(null, 'dfdfdfd'));
console.log(divide(10, null));
console.log(divide(10, undefined));
console.log(divide(10, NaN));
