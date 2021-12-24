'use strict';

//selecting elements
const display = document.querySelector('.display');

function logToDisplay(button) {
  display.innerHTML += button;
}

const ac = document.querySelector('.power');
const one = document.getElementById('#1');
const two = document.getElementById('#2');
const three = document.getElementById('#3');
const four = document.getElementById('#4');
const five = document.getElementById('#5');
const six = document.getElementById('#6');
const seven = document.getElementById('#7');
const eight = document.getElementById('#8');
const nine = document.getElementById('#9');
const zero = document.getElementById('#zero');
const product = document.getElementById('#product');
const divide = document.getElementById('#divide');
const sub = document.getElementById('#sub');
const addition = document.getElementById('#addition');
const equal = document.getElementById('#equal');
const pct = document.getElementById('#pct');
const neg = document.getElementById('#neg');
const clear = document.getElementById('#clear');

one.addEventListener('click', () =>{
   console.log('pressed 1');
});