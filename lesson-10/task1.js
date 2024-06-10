/*  Завдання 1
    Створіть клас "Книга" (Book) з властивостями: "назва", "автор" і "рік видання".
    Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo.

    Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.

    В окремому файлі створіть клас "Електронна книга" (EBook), який буде успадковувати властивості та методи класу Book.
    Додайте до класу EBook нову властивість, наприклад, "формат файлу".

    Сторіть метод printInfo для EBook таким чином щоб друкувалась вся доступна інформація про екземляр EBook
    (все те саме що і для Book але ще формат файлу).

    Створіть інстанс (екземпляр) класу EBook та викличте метод printInfo

    Геттери та сеттери: Додайте геттери та сеттери для всіх властивостей класу Book та EBook.
    В сеттерах необхідно додати валідацію для переданих значень.
    Використовуйте їх для зміни та отримання значень властивостей.

    Створіть статичний метод в класі Book, який буде приймати масив об'єктів(екземрлярів) книг
    та повертати найдавнішу книгу за роком видання. Викличте його в коді передавши масив книг
    (серед них мають бути екземляри обох класів Book та EBook)

    Створіть статичний метод для EBook який буде приймати як аргументи екземпляр класу Book
    і формат файлу як рядок **** та повертати екземпляр класу EBook
 */

import {Book} from "./Book.js";
import {EBook} from "./EBook.js";

const book1 = new Book("Pet Sematary", "Stephen King", 1983);
const book2 = new Book("It", "Stephen King", 1985);
const book3 = new Book("The Green Mile", "Stephen King", 1986);

// book1.printInfo();
// book2.printInfo();
// book3.printInfo();

const eBook4 = new EBook("BookName","BookAuthor",2000,"pdf");

// eBook4.printInfo();

let arrayOfBooks = [book1, book2, book3, eBook4];

console.log(Book.oldestBook(arrayOfBooks));

const bookToEbook = (book, fileFormat) => {
    const newEBook = new EBook();
    newEBook.name = book.name;
    newEBook.author = book.author;
    newEBook.year = book.year;
    newEBook.fileFormat = fileFormat;
    return newEBook;
}

console.log(bookToEbook(book1, "pdf"));

//?
const value = "pdf"
console.log(typeof(value))
console.log(typeof(value) === "string")
