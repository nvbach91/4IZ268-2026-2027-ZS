'use strict';

// Cities used as card faces; each one appears twice on the board
const CITIES = [
  'Prague', 'London', 'Paris', 'Moscow', 'Vancouver',
  'Sydney', 'Tokyo', 'Berlin', 'Madrid', 'Rome'
];

// How long two flipped cards stay visible before the turn resolves (ms)
const FLIP_BACK_DELAY = 2000;

const gameField = document.getElementById('game-field');
const pointsElement = document.getElementById('points');

let points = 0;
let matchedPairs = 0;
let firstCard = null;
let secondCard = null;
let lockBoard = false;

// Fisher-Yates shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Creates a card; the city name is kept in JS and only written to the DOM while revealed
function createCard(name) {
  const element = document.createElement('div');
  element.classList.add('card');

  const card = { name, element, revealed: false, matched: false };

  element.addEventListener('click', (event) => {
    if (!event.isTrusted) return;
    onCardClick(card);
  });

  return card;
}

// Turns a card face-up and shows its city name
function revealCard(card) {
  card.revealed = true;
  card.element.classList.add('revealed');
  card.element.innerText = card.name;
}

// Turns a card face-down and clears its text
function hideCard(card) {
  card.revealed = false;
  card.element.classList.remove('revealed');
  card.element.innerText = '';
}

// Writes the current score to the page
function updatePoints() {
  pointsElement.innerText = points;
}

// Handles a click on a card: reveals it and starts a turn comparison on the second card
function onCardClick(card) {
  if (lockBoard || card.revealed || card.matched) return;

  revealCard(card);

  if (!firstCard) {
    firstCard = card;
    return;
  }

  secondCard = card;
  lockBoard = true;
  resolveTurn();
}

// Compares the two flipped cards, updates the score, and resets the turn after a delay
function resolveTurn() {
  const isMatch = firstCard.name === secondCard.name;

  if (isMatch) {
    points += 1;
    matchedPairs += 1;
  } else {
    points = Math.max(0, points - 1);
  }
  updatePoints();

  setTimeout(() => {
    if (isMatch) {
      [firstCard, secondCard].forEach((card) => {
        card.matched = true;
        card.element.classList.add('matched');
      });
    } else {
      hideCard(firstCard);
      hideCard(secondCard);
    }

    firstCard = null;
    secondCard = null;
    lockBoard = false;

    if (matchedPairs === CITIES.length) {
      endGame();
    }
  }, FLIP_BACK_DELAY);
}

// Locks the board and shows the final score under the game field
function endGame() {
  lockBoard = true;

  const message = document.createElement('p');
  message.classList.add('game-over');
  message.innerText = `Game over! Your total score: ${points} point(s).`;
  gameField.insertAdjacentElement('afterend', message);
}

// Builds the shuffled deck and adds all cards to the page in one step
function renderBoard() {
  const deck = shuffle(CITIES.concat(CITIES)).map(createCard);

  const fragment = document.createDocumentFragment();
  deck.forEach((card) => fragment.appendChild(card.element));
  gameField.appendChild(fragment);
}

// Blocks copying, cutting and the context menu so city names cannot be grabbed from the page
['copy', 'cut', 'contextmenu'].forEach((type) => {
  document.addEventListener(type, (event) => event.preventDefault());
});

renderBoard();
updatePoints();
