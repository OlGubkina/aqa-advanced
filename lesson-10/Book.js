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
        return this._name = value
    }

    set author(value) {
        return this._author = value
    }

    set year(value) {
        return this._year = value
    }

    printInfo() {
        console.log(`
            Book's name: ${this.name} 
            Book's author: ${this.author} 
            Book's year: ${this.year}`)
    }

    // const _oldestBook1 = (inputArray) => {
    //     const sortedArray = inputArray.sort((book1, book2) => book1.year > book2.year ? 1 : -1);
    //     return sortedArray[0];
    // }
}

 const book7 = new Book("Pet Sematary", "Stephen King", 1983);
 const book8 = new Book("It", "Stephen King", 1985);
 const book9 = new Book("The Green Mile", "Stephen King", 1986);

 let arrBooks = [book7, book8, book9];

 //oldestBook1(arrBooks);