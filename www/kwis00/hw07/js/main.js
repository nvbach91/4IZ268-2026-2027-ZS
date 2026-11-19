/**
 * Memorama, Match Match, Match Up, Memory, Pelmanism, Shinkei-suijaku, Pexeso or simply Pairs
 */

let cities = [
  'Prague', 'London', 'Budapest', 'Tel Aviv', 'Kyiv',
  'Ulaanbaatar', 'Venice', 'Paris', 'Mexico City', 'Sofia'
];
cities = cities.concat(cities);
console.log(cities);

cities.sort(() => {
  return 0.5 - Math.random();
});
console.log(cities);

let turnedCard1 = null;
let turnedCard2 = null;
let turnedCity1 = '';
let turnedCity2 = '';
let matchedCities = [];
let isChecking = false;
let turnTimer = null;

let parent = document.getElementById('game-field');
let pointsEl = document.getElementById('points');
let points = 0;

function updatePointsDOM() {
  pointsEl.innerText = points;
}

function losePoint() {
  points -= 1;
  if (points < 0) {
    points = 0;
  }
  updatePointsDOM();
}

function revealCard(card, city) {
  card.classList.remove('card');
  card.classList.add('card-revealed');
  card.innerText = city;
}

function hideCard(card) {
  card.classList.remove('card-revealed');
  card.classList.add('card');
  card.innerText = '';
}

function resetTurn() {
  clearTimeout(turnTimer);
  turnTimer = null;
  turnedCard1 = null;
  turnedCard2 = null;
  turnedCity1 = '';
  turnedCity2 = '';
  isChecking = false;
}

function makeCard(index) {
  let card = document.createElement('div');
  const city = cities[index];

  card.classList.add('card');
  card.id = `card-${index}`;

  card.addEventListener('click', () => {
    if (isChecking || matchedCities.includes(city) || card === turnedCard1) {
      return;
    }

    revealCard(card, city);

    if (turnedCard1 === null) {
      turnedCard1 = card;
      turnedCity1 = city;

      turnTimer = setTimeout(() => {
        hideCard(turnedCard1);
        losePoint();
        resetTurn();
      }, 2000);

      return;
    }

    clearTimeout(turnTimer);
    turnTimer = null;

    turnedCard2 = card;
    turnedCity2 = city;
    isChecking = true;

    if (turnedCity1 === turnedCity2) {
      matchedCities.push(city);
      points += 1;
      updatePointsDOM();
      resetTurn();
    } else {
      setTimeout(() => {
        hideCard(turnedCard1);
        hideCard(turnedCard2);
        losePoint();
        resetTurn();
      }, 1500);
    }
  });

  parent.appendChild(card);
}

let i = 0;
for (const city of cities) {
  makeCard(i);
  i++;
}