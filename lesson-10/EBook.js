import {Book} from "./Book.js";

export class EBook extends Book {
    constructor(name, author, year, fileFormat) {
        super(name, author, year);
        this._fileFormat = fileFormat
    }

    get fileFormat() {
        return this._fileFormat
    }

    set fileFormat(value) {
        if (typeof(value) === "number") return this._fileFormat = value
        else return console.log(`Error: fileFormat is not a string`)
    }

    printInfo() {
        console.log(`       ***
            Book's name: ${this.name} 
            Book's author: ${this.author} 
            Book's year: ${this.year}
            Book's format: ${this.fileFormat}
       ***`)
    }

    static convertBookToEbook = (Book, fileFormat) => {
        return new EBook(Book.name, Book.author, Book.year, fileFormat);
    }
}

