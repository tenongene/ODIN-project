'use strict';

//selecting elements
const display = document.querySelector('.display');
if (display.innerHTML.length > 15) {
  display.innerHTML = 'Error: Max';
} else {
  display.innerHTML = '';
}

const ac = document.querySelector('.power');
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const zero = document.getElementById('zero');
const product = document.getElementById('product');
const divide = document.getElementById('divide');
const sub = document.getElementById('sub');
const addition = document.getElementById('addition');
const equal = document.getElementById('equal');
const pct = document.getElementById('pct');
const neg = document.getElementById('neg');
const clear = document.getElementById('clear');

one.addEventListener('click', () => {
  display.innerHTML += 1;
});
two.addEventListener('click', () => {
  display.innerHTML += 2;
});
three.addEventListener('click', () => {
  display.innerHTML += 3;
});
four.addEventListener('click', () => {
  display.innerHTML += 4;
});
five.addEventListener('click', () => {
  display.innerHTML += 5;
});
six.addEventListener('click', () => {
  display.innerHTML += 6;
});
seven.addEventListener('click', () => {
  display.innerHTML += 7;
});
eight.addEventListener('click', () => {
  display.innerHTML += 8;
});
nine.addEventListener('click', () => {
  display.innerHTML += 9;
});
zero.addEventListener('click', () => {
  display.innerHTML += 0;
});
