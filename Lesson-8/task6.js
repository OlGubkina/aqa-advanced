/*  Завдання 6: Сортування масивів
    У вас є вихідний масив сonst numbersList = [1,10,14,2,4,5,43,34]
    Створіть новий масив на основі вихідного масиву (копіюйте його)
    Відсортуйте створений масив (від меншого до більшого)
    Виведіть обидва масиви в консоль
 */

const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
console.log(`Array: ${numbersList}`);

let sortedNumbersList = numbersList.sort(compare);

function compare(a, b) {
	if (a < b) return -1;
	if (a > b) return 1;
	else return 0;
}

console.log(`Sorted array: ${sortedNumbersList}`);
