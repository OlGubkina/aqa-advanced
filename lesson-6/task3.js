/*
Завдання 3
Створіть функцію checkOrder яка перевіряє можливість оформлення замовлення і повертає повідомлення про
результат. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.
available - доступна кількість товарів на складі
ordered - кількість одиниць товару в замовленні
Якщо товарів в наявності менше ніж замовлено — повернути рядок з повідомленням -
“Your order is too large, we don’t have enough goods.”
Якщо ordered дорівнює нулю — повернути рядок з повідомленням - “Your order is empty”
У разі якщо товарів на складі вистачає — повернути рядок з повідомленням - “Your order is accepted”
*/

const checkOrder = (availableGoodsInStorage, orderedGoods) => {
	if (orderedGoods === 0) {return console.log(`${orderedGoods} - Your order is empty`);}
	else if (orderedGoods > availableGoodsInStorage)
		{return console.log(`${orderedGoods} - Your order is too large, we don’t have enough goods.`);}
	else if (orderedGoods > 0 && orderedGoods <= availableGoodsInStorage)
		{return console.log(`${orderedGoods} - Your order is accepted`);}
	else {return console.log(`${orderedGoods} - Looks like it was incorrect value`);}
};

checkOrder(100, 120);
checkOrder(100, 0);
checkOrder(100, 20);
checkOrder(100, 100);
checkOrder(100, -3);
checkOrder(100, null);
checkOrder();
