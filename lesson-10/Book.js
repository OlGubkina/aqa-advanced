export class Book {
    constructor (name, author, year) {
        this.name = name;
        this.author = author;
        this.year = year;
    }

    get name() {
        return this._name
    }

    get author() {
        return this._author
    }

    get year() {
        return this._year
    }

    set name(value) {
        if (typeof(value) === "string") return this._name = value
        else return console.log(`Error: name is not a string`)
    }

    set author(value) {
        if (typeof(value) === "string") return this._author = value
        else return console.log(`Error: author is not a string`)
    }

    set year(value) {
        if (typeof(value) === "number") return this._year = value
        else return console.log(`Error: year is not a number`)
    }

    printInfo() {
        console.log(`
            Book's name: ${this.name} 
            Book's author: ${this.author} 
            Book's year: ${this.year}`)
    }

    static oldestBook = (inputArray) => {
        const sortedArray = inputArray.sort((book1, book2) => book1.year > book2.year ? 1 : -1);
        return sortedArray[0];
    }
}

const errorBook = new Book(1,2, "o"); //Создастся пустой объект?
console.log(errorBook);