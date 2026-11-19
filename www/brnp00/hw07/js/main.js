
const gameField = document.querySelector('#game-field');
const pointsElement = document.querySelector('#points');

// seznam měst
let cities = ['Prague', 'London', 'Paris', 'Tokyo', 'Sydney', 'Vancouver', 'Lisbon', 'Madrid', 'New York', 'Cairo'];


let points = 0;
let firstCard = null;
let secondCard = null;
let revealedPairs = 0;
let pairsCount = 0;

const cardValues = new Map();

const updatePoints = () => {
  pointsElement.innerText = points;
};

const showEndScreen = () => {
  const endBox = document.createElement('div');
  endBox.classList.add('end-box');

  const endText = document.createElement('p');
  endText.innerText = `Game Over! Final score: ${points}`;

  const restartButton = document.createElement('button');
  restartButton.innerText = 'Hrát znovu';
  restartButton.classList.add('restart-button');
  restartButton.addEventListener('click', () => {
    endBox.remove();
    startGame();
  });

  endBox.appendChild(endText);
  endBox.appendChild(restartButton);
  gameField.after(endBox);
};

const hideCard = (card) => {
  card.classList.remove('revealed');
  card.innerText = '';
};

const resetTurn = () => {
  firstCard = null;
  secondCard = null;
};

const evaluateTurn = () => {
  const firstValue = cardValues.get(firstCard);
  const secondValue = cardValues.get(secondCard);

  if (firstValue === secondValue) {
    points++;
    revealedPairs++;
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    updatePoints();
    resetTurn();

    if (revealedPairs === pairsCount) {
      showEndScreen();
    }
    return;
  }

  if (points > 0) {
    points--;
  }
  updatePoints();
  setTimeout(() => {
    hideCard(firstCard);
    hideCard(secondCard);
    resetTurn();
  }, 800);
};

const onCardClick = (card) => {
  if (firstCard && secondCard) {
    return;
  }
  if (card.classList.contains('revealed')) {
    return;
  }

  card.classList.add('revealed');
  card.innerText = cardValues.get(card);

  if (!firstCard) {
    firstCard = card;
    return;
  }

  secondCard = card;
  evaluateTurn();
};

const createCard = (city) => {
  const card = document.createElement('div');
  card.classList.add('card');
  cardValues.set(card, city);
  card.addEventListener('click', () => {
    onCardClick(card);
  });
  return card;
};

const startGame = () => {
  points = 0;
  revealedPairs = 0;
  resetTurn();
  cardValues.clear();
  gameField.innerHTML = '';
  updatePoints();

  let gameCities = cities.concat(cities);
  gameCities.sort(() => 0.5 - Math.random());
  pairsCount = cities.length;

  const fragment = document.createDocumentFragment();
  gameCities.forEach((city) => {
    fragment.appendChild(createCard(city));
  });
  gameField.appendChild(fragment);
};

startGame();
