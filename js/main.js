
const CITY_NAMES = [
  'Prague', 'London', 'Paris', 'Moscow', 'California',
  'Vancouver', 'Sydney', 'Tokyo', 'Berlin', 'Madrid',
];
const FLIP_BACK_DELAY = 1500;

let points = 0;
let matchedCount = 0;
let firstCard = null;
let secondCard = null;
let locked = false;

// kontent se drzi v JS az karta se zobrazi, aby nikdo ne podvadel pomoci inspekci
const cardValues = new WeakMap();

const pointsEl = document.querySelector('#points');
const gameField = document.querySelector('#game-field');

const setPoints = (value) => {
  points = Math.max(0, value);
  pointsEl.innerText = points;
};

const hideCard = (card) => {
  card.classList.remove('revealed');
  card.innerText = '';
};

const showCard = (card) => {
  card.classList.add('revealed');
  card.innerText = cardValues.get(card);
};

const endGame = () => {
  const overlay = document.createElement('div');
  overlay.classList.add('game-over');
  const box = document.createElement('div');
  box.classList.add('game-over-box');
  const title = document.createElement('h2');
  title.innerText = 'Game over!';
  const score = document.createElement('p');
  score.innerText = `Your total score: ${points}`;
  const button = document.createElement('button');
  button.innerText = 'Play again';
  button.addEventListener('click', () => {
    overlay.remove();
    startGame();
  });
  box.append(title, score, button);
  overlay.appendChild(box);
  document.body.appendChild(overlay);
};

const resetTurn = () => {
  firstCard = null;
  secondCard = null;
  locked = false;
};

const onCardClick = (card) => {
  // neklikat kdyz uz dve karty uz zobrazeny, nebo na uz zobrazene karty
  if (locked || card.classList.contains('revealed')) {
    return;
  }
  showCard(card);

  if (!firstCard) {
    firstCard = card;
    return;
  }

  secondCard = card;
  locked = true;

  if (cardValues.get(firstCard) === cardValues.get(secondCard)) {
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    setPoints(points + 1);
    matchedCount += 2;
    resetTurn();
    if (matchedCount === gameField.children.length) {
      // dava cas posledni karte renderovat, nez zobrazi vysledek
      setTimeout(endGame, 300);
    }
  } else {
    setPoints(points - 1);
    const a = firstCard;
    const b = secondCard;
    setTimeout(() => {
      hideCard(a);
      hideCard(b);
      resetTurn();
    }, FLIP_BACK_DELAY);
  }
};

const createCard = (value) => {
  const card = document.createElement('div');
  card.classList.add('card');
  cardValues.set(card, value);
  card.addEventListener('click', () => onCardClick(card));
  return card;
};

function startGame() {
  points = 0;
  matchedCount = 0;
  resetTurn();
  setPoints(0);
  gameField.innerHTML = '';

  const cities = CITY_NAMES.concat(CITY_NAMES);
  cities.sort(() => 0.5 - Math.random());

  // nastavit nejprve vsichny karty, vlozit ji v DOM najednou
  const fragment = document.createDocumentFragment();
  cities.forEach((city) => fragment.appendChild(createCard(city)));
  gameField.appendChild(fragment);
}

startGame();
