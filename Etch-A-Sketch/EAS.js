'use strict';

let container = document.querySelector('.container');
let btn = document.querySelector('.btn');
let grid = document.querySelector('.grid');

function buildGrid(size = 256, block = 16) {
  for (let i = 1; i <= size; i++) {
    container.innerHTML += '<div class = "grid"></div>';
    container.style.cssText = `display: grid;grid-template-rows: repeat(${block}, 1fr);grid-template-columns: repeat(${block}, 1fr)`;
  }
}

buildGrid();

btn.addEventListener('click', () => {
  container.innerHTML = '';
  let squares = prompt('Enter number of squares per side for new grid:');
  if (squares > 100) {
    alert('Exceeded maximum grid size!');
  } else {
    buildGrid(squares ** 2, squares);
  }
});
