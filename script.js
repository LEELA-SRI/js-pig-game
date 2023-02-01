'use strict';

let player0ScoreElt = document.getElementById('score--0');
let player1ScoreElt = document.getElementById('score--1');
let rollDiceBtn = document.querySelector('.btn--roll');
let diceImg = document.querySelector('.dice');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let CurrentScore0Elt = document.getElementById('current--0');
let CurrentScore1Elt = document.getElementById('current--1');
let holdBtn = document.querySelector('.btn--hold');
let newGameBtn = document.querySelector('.btn--new');

let scores;
let activeplayer;
let currentScore;
let diceVal;

let newGame = function () {
  scores = [0, 0];
  currentScore = 0;
  activeplayer = 0;
  player0ScoreElt.innerHTML = 0;
  player1ScoreElt.innerHTML = 0;
  CurrentScore0Elt.innerHTML = 0;
  CurrentScore1Elt.innerHTML = 0;
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  rollDiceBtn.disabled = false;
  holdBtn.disabled = false;
};

let checkWinner = function (a) {
  if (scores[a] >= 50) {
    document
      .querySelector(`.player--${activeplayer}`)
      .classList.add('player--winner');
    rollDiceBtn.disabled = true;
    holdBtn.disabled = true;
  }
};

let switchPlayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  currentScore = 0;
  activeplayer = activeplayer == 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

newGame();

newGameBtn.addEventListener('click', newGame);

rollDiceBtn.addEventListener('click', function () {
  diceVal = Math.trunc(Math.random() * 6 + 1);
  console.log(diceVal);
  diceImg.src = "img\\"+`dice-${diceVal}.png`;
  if (diceVal == 1) {
    switchPlayer();
  } else {
    currentScore += diceVal;
    document.getElementById(`current--${activeplayer}`).textContent =
      currentScore;
  }
});

holdBtn.addEventListener('click', function () {
  scores[activeplayer] += currentScore;
  document.getElementById(`score--${activeplayer}`).textContent =
    scores[activeplayer];
  checkWinner(activeplayer);
  switchPlayer();
});
