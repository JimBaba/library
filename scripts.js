const container = document.getElementsByClassName("book-container")

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return title + " by " + author + ", " + pages + " Seiten, " 
        + "gelesen: " + read       
    }
    this.announce = function(){
        return "This is a book"
    }
    
}

const dreiSonnen = new Book("Die Drei Sonnen", "Cixin Liu", 689, true)

const urknall = new Book("Urknall, Weltall und das Leben", "Professor Harald Lesch", 356, false)

const akira = new Book("AKIRA", "Katsuhiro Otomo", 478, true)

const myLibrary = [dreiSonnen, urknall, akira];

function addToLibrary(book) {
    myLibrary.push(book)
    return book + " added to myLibrary"
}

function showBooks() { 
    // loops through myLibrary and 
    // display the books (titles?) on the website
    // how to display them? grid? divs?
}

// add button NEW BOOk which opens a form to enter new books 

// add button to remove individual books from myLibrary from the display

