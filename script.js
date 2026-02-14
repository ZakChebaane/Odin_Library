const myLibrary = [];

function Book(title, author, numberOfPages, beenRead) {
    //constructor
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.beenRead = beenRead;
}
function addBookToLibrary(title, author, numberOfPages, beenRead) {
    //take params, create a book then store it in the array
    const myBook = new Book(title, author, numberOfPages, beenRead);
    myLibrary.push(myBook);
}
const container = document.querySelector(".container");

addBookToLibrary("GOT", "George R.R Martin", 678, true);
addBookToLibrary("Dune", "Frank Herbert", 426, true);
addBookToLibrary("Invincible", "Robert Kirkman", 1028, true);

function displayBooks(arr) {
    let i;
    for (i = 0; i < arr.length; i++) {
        const card = document.createElement("div");
        card.classList.add("card");
        const titleDIV = document.createElement("div");
        const authorDIV = document.createElement("div");
        const numberOfPagesDIV = document.createElement("div");
        const beenReadDIV = document.createElement("label");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        titleDIV.textContent = "Title: " + arr[i].title;
        authorDIV.textContent = "Author: " + arr[i].author;
        numberOfPagesDIV.textContent = "Number of Pages: " + arr[i].numberOfPages;
        beenReadDIV.textContent = "Read?";
        beenReadDIV.htmlFor = "checkbox";
        checkbox.checked = arr[i].beenRead;
        checkbox.id = "checkbox";
        beenReadDIV.appendChild(checkbox);
        card.appendChild(titleDIV);
        card.appendChild(authorDIV);
        card.appendChild(numberOfPagesDIV);
        card.appendChild(beenReadDIV);
        container.appendChild(card);
    }
}
displayBooks(myLibrary);
