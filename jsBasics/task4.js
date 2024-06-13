// 4.1: Площа кола (π * radius^2)
let PI = Math.PI;
let radiusOfCircle = 10.5;

console.log(`Area of circle with radius = ${radiusOfCircle} => ${(PI * Math.pow(radiusOfCircle, 2)).toFixed(2)}`);

// 4.2 Площа прямокутника
let length = 8.2;
let width = 2.3;

console.log(`Area of rectangle with length = ${length} and width = ${width} => ${(length * width).toFixed(2)}`);

// 4.3 Об'єм циліндра (π * radius^2 * height)
let radius = 5.2;
let height = 7.3;

console.log(
	`Area of cylinder with radius = ${radius} and height = ${height} => ${(PI * Math.pow(radiusOfCircle, 2) * height).toFixed(2)}`,
);
