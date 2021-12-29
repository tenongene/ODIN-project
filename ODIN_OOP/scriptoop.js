'use strict';

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
const btn = document.querySelector('.btn');
let bookEl = document.querySelector('.book');
let titleEl = document.querySelector('.tit');
let authorEl = document.querySelector('.name');
let pagesEl = document.querySelector('.pages');
let readEl = document.querySelector('.read');
let inputEl = document.querySelectorAll('.input');
let section = document.querySelector('.cards');

const Book = function (title, author, pages, readStatus) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
};

function addBookToLibrary(book) {
  book = new Book(titleEl.value, authorEl.value, pagesEl.value, readEl.value);
  myLibrary.push(book);
  inputEl.value = ' ';
  console.log(myLibrary);
  section.innerHTML += `<div class="book">
  <div class="title">Title: ${myLibrary[myLibrary.length - 1].title}</div>
  <div>Author: ${myLibrary[myLibrary.length - 1].author}</div>
  <div>Number of pages: ${myLibrary[myLibrary.length - 1].pages}</div>
  <div>Read Status: ${myLibrary[myLibrary.length - 1].readStatus}</div>
</div>`;
}

btn.addEventListener('click', addBookToLibrary);
