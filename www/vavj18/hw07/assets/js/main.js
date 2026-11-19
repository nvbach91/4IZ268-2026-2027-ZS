let cities = ['Prague', 'London', 'Paris', 'Moscow', 'Sydney', 'Vancouver', 'Tokyo', 'Rome', 'Berlin', 'Madrid'];
cities = cities.concat(cities);
cities.sort(function () {
  return 0.5 - Math.random();
});

const gameField = document.querySelector('#game-field');
const pointsElement = document.querySelector('#points');

let points = 0;
let firstCard = null;
let secondCard = null;
let firstCity = '';
let secondCity = '';
let revealedCount = 0;

function createCard(city) {
  const card = document.createElement('div');
  card.classList.add('card');

  card.addEventListener('click', function () {
    if (secondCard !== null) {
      return;
    }
    if (card.classList.contains('revealed')) {
      return;
    }

    card.classList.add('revealed');
    card.innerText = city;

    if (firstCard === null) {
      firstCard = card;
      firstCity = city;
      return;
    }

    secondCard = card;
    secondCity = city;

    if (firstCity === secondCity) {
      points = points + 1;
      revealedCount = revealedCount + 2;
      pointsElement.innerText = points;
      firstCard = null;
      secondCard = null;

      if (revealedCount === cities.length) {
        endGame();
      }
    } else {
      points = points - 1;
      if (points < 0) {
        points = 0;
      }
      pointsElement.innerText = points;

      setTimeout(function () {
        firstCard.classList.remove('revealed');
        secondCard.classList.remove('revealed');
        firstCard.innerText = '';
        secondCard.innerText = '';
        firstCard = null;
        secondCard = null;
      }, 2000);
    }
  });

  return card;
}

function endGame() {
  const message = document.createElement('p');
  message.classList.add('message');
  message.innerText = 'Konec hry! Celkový počet bodů: ' + points;
  document.body.appendChild(message);
}

const fragment = document.createDocumentFragment();
for (let i = 0; i < cities.length; i++) {
  fragment.appendChild(createCard(cities[i]));
}
gameField.appendChild(fragment);
