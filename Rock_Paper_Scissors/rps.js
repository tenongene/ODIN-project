'use strict';

const choices = ['Rock', 'Paper', 'Scissors'];
let playerSelection = prompt('Enter Rock, Paper or Scissors:');
let computerSelection = choices[Math.trunc(Math.random() * 3)];

console.log(`You selected ${playerSelection}`);
console.log(`Computer selected: ${computerSelection}`);

function playRound() {
  if (
    (playerSelection == 'Rock' && computerSelection == 'Scissors') ||
    (playerSelection == 'Paper' && computerSelection == 'Rock') ||
    (playerSelection == 'Scissors' && computerSelection == 'Paper')
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === computerSelection) {
    return "It's a tie";
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}!`;
  }
}
