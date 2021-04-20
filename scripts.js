const container = document.getElementById("book-container")
const br = document.createElement("br")
const formCont = document.getElementById("newBook")

// Book object Prototype

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.announce = function(){
        return "This is a book"
    }
    this.switchRead = function(){
        if(this.read == true){
            this.read = false
            console.log("change status to false " + this.read)
        } else {
            this.read = true
            console.log("change status to true " + this.read)
        }
    }
    this.info = function(){
        return this.title + " by " + this.author + ", " + this.pages + " Seiten, " 
        + "gelesen: " + this.read       
    }
    
}

// some books to fill the myLibrary array

const dreiSonnen = new Book("Die Drei Sonnen", "Cixin Liu", 689, true)

const urknall = new Book("Urknall, Weltall und das Leben", "Professor Harald Lesch", 356, false)

const akira = new Book("AKIRA", "Katsuhiro Otomo", 478, true)

const myLibrary = [dreiSonnen, urknall, akira];

// function to manually add new books to the myLibrary array

function addToLibrary(book) {
    myLibrary.push(book)
    return book + " added to myLibrary"
}

// display books with delete and read buttons

function showBooks() { 
        delAll();
    for(let i = 0; i < myLibrary.length; i++ ){
        let cell = document.createElement("div");
        cell.style.setProperty("grid-column", 1)
        cell.style.setProperty("border", "solid black");
        cell.style.setProperty("margin", "5px")
        cell.style.setProperty("padding", "1em")
        cell.style.setProperty("background-color", "rgb(69, 201, 245)")
        cell.innerText = myLibrary[i].info();
        container.appendChild(cell).id = "book" + i;
        makeBtnDel(i);
        makeBtnRead(i);
    }
}

// function that deletes single library entries

function makeBtnDel(i) {
    let delBtn = document.createElement("input");
    delBtn.style.setProperty("grid-column", 2)
    delBtn.style.setProperty("width","100px")
    delBtn.style.setProperty("height", "40px")
    delBtn.style.setProperty("margin", "5px")
    delBtn.type = "button";
    delBtn.value = "delete";
    delBtn.onclick = function() {
        myLibrary.splice(i,1)
        let delBtn = document.getElementById("btnDel" + i) 
        container.removeChild(delBtn)
        let delBook = document.getElementById("book" + i)
        container.removeChild(delBook)
        let delRead = document.getElementById("readBtn" + i)
        container.removeChild(delRead);
    }
    container.appendChild(delBtn).id = "btnDel" + i;
}

// function that adds a button to change the read status. when hit, it changes the
// read status via the book prototype

function makeBtnRead(i) {
    let readBtn = document.createElement("input");
    readBtn.style.setProperty("grid-column", 3);
    readBtn.style.setProperty("width", "100px");
    readBtn.style.setProperty("height", "40px")
    readBtn.style.setProperty("margin", "5px");
    readBtn.type = "button";
    readBtn.value = "Read";
    readBtn.onclick = function() {
        delAll();
        myLibrary[i].switchRead()
        console.log(myLibrary[i].info() + " " + myLibrary[i].read)
        showBooks();
    }
    container.appendChild(readBtn).id = "readBtn" + i;
    
}

// create a form to add books

function createForm() {
    let form = document.createElement("form");
    form.id = "formBook";
    form.className = "bookForm"

    let title = document.createElement("input")
    title.setAttribute("type", "text")
    title.setAttribute("name", "booktitle")
    title.setAttribute("placeholder", "Buchtitel")
    form.appendChild(title)
    form.appendChild(br.cloneNode());

    let author = document.createElement("input")
    author.setAttribute("type", "text")
    author.setAttribute("name", "author")
    author.setAttribute("placeholder", "Autor")
    form.appendChild(author)
    form.appendChild(br.cloneNode())

    let pages = document.createElement("input")
    pages.setAttribute("type", "text")
    pages.setAttribute("name", "amountPages")
    pages.setAttribute("placeholder", "Seitenzahl")
    form.appendChild(pages)
    form.appendChild(br.cloneNode())

    let read = document.createElement("input")
    read.setAttribute("type", "text")
    read.setAttribute("name", "read")
    read.setAttribute("placeholder", "Schon gelesen? true or false")
    form.appendChild(read)
    form.appendChild(br.cloneNode())

    let submit = document.createElement("input")
    submit.setAttribute("type", "submit")
    submit.setAttribute("value", "submit")
    submit.onclick = function(e) {
        const formID = document.querySelectorAll(".bookForm")
        e.preventDefault();
        bookFromForm(formID[0][0].value, formID[0][1].value, formID[0][2].value, formID[0][3].value);
        delAll();
        showBooks();
    }

    form.appendChild(submit)
    form.appendChild(br.cloneNode());
    formCont.appendChild(form)
}

// function that deletes all shown books (only display, not array contents)

function delAll() {
    container.innerHTML = ""
}

// function that adds new books via the form, function is part of submit button onclick()

function bookFromForm(title, author, pages, read){
    myLibrary.push(new Book(title, author, pages, read))

}