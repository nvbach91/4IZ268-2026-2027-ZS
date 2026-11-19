/**
 * Memorama, Match Match, Match Up, Memory, Pelmanism, Shinkei-suijaku, Pexeso or simply Pairs
 */

// seznam měst (10 měst -> 20 karet)
let cities = [
  'Prague', 'London', 'Paris', 'Tokyo', 'Sydney',
  'Vancouver', 'Rome', 'Berlin', 'Madrid', 'Kyiv',
];

// duplikovat seznam měst a zamíchat
cities = cities.concat(cities);
cities.sort(() => 0.5 - Math.random());

// DOM elementy
const gameField = document.querySelector('#game-field');
const pointsElement = document.querySelector('#points');

// stav hry
let points = 0;
let firstCard = null;
let secondCard = null;
let revealedCount = 0;

// Prevence podvádění: název města NENÍ uložen v DOM (ani v atributu),
// ale jen v této mapě. Hráč ho tak nevyčte z DevTools před otočením karty.
const cardValues = new WeakMap();

const updatePoints = () => {
  pointsElement.innerText = points;
};

const revealCard = (card) => {
  card.innerText = cardValues.get(card);
  card.classList.add('revealed');
};

const hideCard = (card) => {
  card.innerText = '';
  card.classList.remove('revealed');
};

const endGame = () => {
  const message = document.createElement('p');
  message.classList.add('game-over');
  message.innerText = `Game over! Your total points: ${points}`;
  gameField.after(message);
};

const evaluateTurn = () => {
  if (cardValues.get(firstCard) === cardValues.get(secondCard)) {
    // shoda: +1 bod, karty zůstanou odhalené
    points++;
    revealedCount += 2;
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    firstCard = null;
    secondCard = null;
    updatePoints();
    if (revealedCount === cities.length) {
      endGame();
    }
  } else {
    // neshoda: -1 bod (ne do minusu), po 2 s karty otočit zpět
    points = Math.max(0, points - 1);
    updatePoints();
    setTimeout(() => {
      hideCard(firstCard);
      hideCard(secondCard);
      firstCard = null;
      secondCard = null;
    }, 2000);
  }
};

const createCard = (city) => {
  const card = document.createElement('div');
  card.classList.add('card');
  cardValues.set(card, city);

  card.addEventListener('click', () => {
    // hra je zamrzlá (dvě karty otočené) nebo karta už je odhalená
    if (secondCard || card.classList.contains('revealed')) {
      return;
    }
    revealCard(card);
    if (!firstCard) {
      firstCard = card;
    } else {
      secondCard = card;
      evaluateTurn();
    }
  });

  return card;
};

// vytvořit všechny karty a vložit je do hrací plochy najednou
const fragment = document.createDocumentFragment();
cities.forEach((city) => {
  fragment.appendChild(createCard(city));
});
gameField.appendChild(fragment);
