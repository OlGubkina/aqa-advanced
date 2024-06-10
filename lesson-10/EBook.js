import {Book} from "./Book.js";

export class EBook extends Book {
    constructor(name, author, year, fileFormat) {
        super(name, author, year);
        this.fileFormat = fileFormat
    }

    get fileFormat() {
        return this._fileFormat
    }

    set fileFormat(value) {
        return this._fileFormat = value
    }

    printInfo() {
        console.log(`       ***
            Book's name: ${this.name} 
            Book's author: ${this.author} 
            Book's year: ${this.year}
            Book's format: ${this.fileFormat}
       ***`)
    }
}