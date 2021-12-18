"use strict";

function processData(input) {
  //Enter your code here
  let arrEven = [];
  let arrOdd = [];
  for (let i = 0; i <= input.length; i++) {
    if (i % 2 === 0) {
      arrEven.push(input[i]);
    } else {
      arrOdd.push(input[i]);
    }
  }
  console.log(`${arrEven.join("")} ${arrOdd.join("")}`);
}
processData("Hacker");
processData("Rank");

// -------------------------------------------------------------------------------------------------------------------------

// let n = 5;
// for (let i = 1; i <= 10; i++) {
//   console.log(`${n} x ${i} = ${n * i}`);
// }

// function reverse(arr) {
//    console.log (arr.reverse().join(' '));
// }

// let data = [4,6,8,9,1,45,78,5];

// reverse(data);
