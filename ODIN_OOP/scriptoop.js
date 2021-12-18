"use strict";

// function Player(name, marker) {
//     this.name = name
//     this.marker = marker
//   };

// const player = new Player('steve', 'X')
// console.log(player.name) // 'steve'

// const Book = function (title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     // this.info = function () {
//     //     return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
//     // }

// }
// //create object methods outside of object using prototype rather than constructor inside object
// Book.prototype.info = function () {
//     return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`};
// const hobbit = new Book('The Hobbit', 'J.R.R Tolken', 295, 'already read');
// console.log(hobbit.info());

let myLibrary = [];
const btn = document.querySelector(".btn");
let entry = document.querySelector(".entries").innerHTML;

const Book = function (title, author, pages, readStatus) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
};

// const book1 = new Book("Therapeutics", "Koda-Kimble", 2500, "read");
// const book2 = new Book("Free", "Lea Ypi", 400, "not read");
// console.log(book1);
// console.log(book2);
// myLibrary.push(book1);
// myLibrary.push(book2);
// console.log(myLibrary);

function addBookToLibrary(book) {
  book = new Book(
    prompt("Enter Title:"),
    prompt("Enter Author:"),
    prompt("Enter number of pages:"),
    prompt("Enter read status:")
  );
  myLibrary.push(book);
  console.log(myLibrary);

  document.querySelector(
    ".entries"
  ).innerHTML += `<tr></tr><td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.pages}</td>
  <td>${book.readStatus}</td></tr>`;
}

btn.addEventListener("click", addBookToLibrary);
