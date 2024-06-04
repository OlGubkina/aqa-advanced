/* Завдання 5
    Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
    Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
    Зробіть деструктуризацію в циклі
*/

const users = [
    {firstName: 'Alice', lastName: 'Anderson', age: 20, email:'alice@gmail.com'},
    {firstName: 'Bob', lastName: 'Anderson', age: 22, email:'bob@gmail.com'},
    {firstName: 'Anna', lastName: 'Anderson', age: 25, email:'anna@gmail.com'},
    {firstName: 'Alex', lastName: 'Anderson', age: 45, email:'alex@gmail.com'}
];

for (const {firstName, lastName, age,email} of users) {
    console.log(`${firstName} ${lastName} has ${age} years and email: ${email}`)
}