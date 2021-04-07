const container = document.getElementById("book-container")

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

function newBook(title, author, pages, read){
    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook);
}

function showBooks() { 
    for(let i = 0; i < myLibrary.length; i++ ){
        let cell = document.createElement("div");
        cell.style.setProperty("grid-column", 1)
        cell.style.setProperty("border", "solid black");
        cell.style.setProperty("margin", "5px")
        cell.innerText = myLibrary[i].info();
        container.appendChild(cell).className = "book" + i;
        makeBtn();
    }
    // loops through myLibrary and 
    // display the books (titles?) on the website
    // how to display them? grid? divs?
}

// add button NEW BOOk which opens a form to enter new books 

// add button to remove individual books from myLibrary from the display



function makeBtn() {
    let delBtn = document.createElement("input");
    delBtn.style.setProperty("grid-column", 2)
    delBtn.style.setProperty("width","100px")
    delBtn.style.setProperty("margin", "5px")
    delBtn.type = "button";
    delBtn.value = "delete";
    delBtn.onclick = function() {myLibrary.some}
    container.appendChild(delBtn).id = "btnDel";
}
