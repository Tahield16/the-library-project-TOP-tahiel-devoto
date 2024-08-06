const myLibrary = [];
const addNewBook = document.getElementById('add-new-book');
const newBookData = document.getElementById('submit-new-book');
const newBookDialog = document.getElementById('dialog-new-book');
const newBookForm=document.getElementById('form-newBook');
const libraryDisplay = document.querySelector('#library-display');
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
function addBookToLibrary(title, author, pages, read) {
    // const newBook=new Book(title,author,pages,read);
    console.log(read);
    console.log(myLibrary);
    myLibrary.push(new Book(title, author, pages, read));
    displayBooks();

}
function displayBooks() {

    while (libraryDisplay.firstChild) {
        libraryDisplay.removeChild(libraryDisplay.firstChild);
    }

    for (let i = 0; i <= myLibrary.length - 1; i++) {
        console.log(myLibrary[i].read);
        let bookTitle = document.createElement('h2');
        let bookAuthor = document.createElement('h3');
        let bookRead = document.createElement('input');
        let bookDeleteButton = createDeleteButtons(i);
        console.log(bookDeleteButton);
        bookRead.setAttribute('type', 'checkbox');
        console.log(bookRead);
        let bookPages = document.createElement('p');
        let bookContainer = document.createElement('div');
        bookContainer.classList.add('book-card');
        bookTitle.textContent = `Title: ${myLibrary[i].title}`;
        bookAuthor.textContent = `Author: ${myLibrary[i].author}`;
        bookPages.textContent = `N° of pages: ${myLibrary[i].pages}`;
        bookRead.checked = myLibrary[i].read;
        bookContainer.appendChild(bookTitle);
        bookContainer.appendChild(bookAuthor);
        bookContainer.appendChild(bookPages);
        bookContainer.appendChild('Did you read it?' + bookRead);
        bookContainer.appendChild(bookDeleteButton);
        libraryDisplay.appendChild(bookContainer);


    }
}
function createDeleteButtons(index) {
    let newButton = document.createElement('button');
    newButton.textContent = 'x';
    newButton.classList.add('delete-book-button');
    newButton.addEventListener('click', () => {
        deleteBooks(index);
    });
    return newButton;

}
function deleteBooks(index) {
    myLibrary.splice(index, 1);
    console.log(myLibrary);
    displayBooks();
}

addNewBook.addEventListener('click', () => {
    newBookDialog.show();
})

newBookForm.addEventListener('submit',(event)=>{
    let inputTitle = document.querySelector('#newbook-title');
    let inputAuthor = document.querySelector('#newbook-author');
    let inputPages = document.querySelector('#newbook-pages');
    let inputRead = document.querySelector('#newbook-read').checked;
    if(!inputTitle.checkValidity()){
        event.preventDefault();
        inputTitle.focus();
        alert("The title has to be at least one(1) letter");

    }
    if(!inputAuthor.checkValidity()){
        event.preventDefault();
        inputTitle.focus();
        alert('The author name has to be at least six(6) letters');
    }
    if(!inputPages.checkValidity()){
        event.preventDefault();
        inputAuthor.focus();
        alert('The number of pages have to be more than zero(0)');

    }

    addBookToLibrary(inputTitle.value, inputAuthor.value, inputPages.value, inputRead);
});