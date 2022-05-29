'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Corrent Answer';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

///////////////////////////////////////////////////
///////////////////////////////////////////////////

let secretNumber = Math.floor(Math.random() * (20 - 0 + 1)) + 1;
// OR
// const number= Math.trunc(Math.random*20) + 1;
//console.log(number);

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(typeof guess);

  // When the player does not enter any value
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No value Entered !!';
  }
  // When the entered value is above 20 or below 0
  else if (guess > 20 || guess < 0) {
    document.querySelector('.message').textContent =
      'Enter a value between 0 and 20';
  }
  // If the answer is guessed
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Answer !!');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
    }
  }
  // When the guess is not equal to the number
  else if (guess !== secretNumber) {
    if (score > 1) {
      //   if (guess > secretNumber)
      //     document.querySelector('.message').textContent = ' 📈 Too High !!';
      //   if (guess < secretNumber)
      //     document.querySelector('.message').textContent = '📉 Too Low !!';

      // OR we can do ternary operation
      /**
       *  ! 👇 this is called refactoring of the code
       */
      displayMessage(
        guess > secretNumber ? ' 📈 Too High !!' : '📉 Too Low !!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '😢 You Lost the Game !!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * (20 - 0 + 1)) + 1;

  displayMessage('Start guessing...');
  //displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});

/**
 * ! Refactoring means restructuring the code without changing it's use
 */
