const container = document.getElementById("book-container")
const br = document.createElement("br")
const formCont = document.getElementById("newBook")

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

const dreiSonnen = new Book("Die Drei Sonnen", "Cixin Liu", 689, true)

const urknall = new Book("Urknall, Weltall und das Leben", "Professor Harald Lesch", 356, false)

const akira = new Book("AKIRA", "Katsuhiro Otomo", 478, true)

const myLibrary = [dreiSonnen, urknall, akira];


function addToLibrary(book) {
    myLibrary.push(book)
    return book + " added to myLibrary"
}

function newBook(){
    let title = prompt("Enter title");
    let author = prompt("Enter author");
    let pages = prompt("How many pages?");
    let read = prompt("Did you read it? (true or false)")
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
        container.appendChild(cell).id = "book" + i;
        makeBtnDel(i);
        makeBtnRead(i);
    }
    // loops through myLibrary and 
    // display the books (titles?) on the website
    // how to display them? grid? divs?
}

// add button NEW BOOk which opens a form to enter new books 

// add button to remove individual books from myLibrary from the display



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
        console.log("delete all")
        myLibrary[i].switchRead()
        console.log(myLibrary[i].info() + " " + myLibrary[i].read)
        showBooks();
        console.log("show new")
    }
    container.appendChild(readBtn).id = "readBtn" + i;
    
}

function createForm() {
    let form = document.createElement("form");
    form.setAttribute("method", "post")
    form.setAttribute("action", "submit.php")
    form.id = "formBook";
    let title = document.createElement("input")
    title.setAttribute("type", "text")
    title.setAttribute("name", "booktitle")
    title.setAttribute("placeholder", "Book Title")
    form.appendChild(title)
    form.appendChild(br.cloneNode());
    let author = document.createElement("input")
    author.setAttribute("type", "text")
    author.setAttribute("name", "author")
    author.setAttribute("placeholder", "Author")
    form.appendChild(author)
    form.appendChild(br.cloneNode())
    let pages = document.createElement("input")
    pages.setAttribute("type", "text")
    pages.setAttribute("name", "amountPages")
    pages.setAttribute("placeholder", "Amount of Pages")
    form.appendChild(pages)
    form.appendChild(br.cloneNode())
    let read = document.createElement("input")
    read.setAttribute("type", "text")
    read.setAttribute("name", "read")
    read.setAttribute("placeholder", "Already read? true or false")
    form.appendChild(read)
    form.appendChild(br.cloneNode())
    let submit = document.createElement("input")
    submit.setAttribute("type", "submit")
    submit.setAttribute("value", "submit")
    submit.onclick = function() {
        // addToLibrary(new Book(nForm.elements[0].value, nForm.elements[1].value,
        //    nForm.elements[2].value, nForm.elements[3].value))
        console.log("onclick works")
    }
    form.appendChild(submit)
    form.appendChild(br.cloneNode());
    formCont.appendChild(form)
    let nForm = document.getElementById("formBook")
}

function delAll() {
    container.innerHTML = ""
}


