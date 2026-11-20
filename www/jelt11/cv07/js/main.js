/**
 * Memorama, Match Match, Match Up, Memory, Pelmanism, Shinkei-suijaku, Pexeso or simply Pairs
 */

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let letters = alphabet.sort(() => 0.5 - Math.random()).slice(0, 10);
letters = letters.concat(letters);
letters.sort(() => 0.5 - Math.random());

const gameField = document.querySelector('#game-field');
const pointsElement = document.querySelector('#points');

let points = 0;
let firstCard = null;
let secondCard = null;
let revealedCount = 0;

const createCard = (letter) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.addEventListener('click', () => {
    if (secondCard !== null || card.classList.contains('revealed')) {
      return;
    }
    card.innerText = letter;
    card.classList.add('revealed');
    if (firstCard === null) {
      firstCard = card;
      return;
    }
    secondCard = card;
    checkPair();
  });
  return card;
};

const checkPair = () => {
  if (firstCard.innerText === secondCard.innerText) {
    points++;
    revealedCount += 2;
    firstCard = null;
    secondCard = null;
    pointsElement.innerText = points;
    if (revealedCount === letters.length) {
      const message = document.createElement('div');
      message.classList.add('game-over');
      message.innerText = 'Game over! Your total score: ' + points;
      gameField.after(message);
    }
  } else {
    if (points > 0) {
      points--;
    }
    pointsElement.innerText = points;
    setTimeout(() => {
      firstCard.innerText = '';
      firstCard.classList.remove('revealed');
      secondCard.innerText = '';
      secondCard.classList.remove('revealed');
      firstCard = null;
      secondCard = null;
    }, 2000);
  }
};

const cards = letters.map((letter) => createCard(letter));
gameField.append(...cards);
