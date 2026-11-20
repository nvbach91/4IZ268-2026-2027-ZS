/**
 * Memorama, Match Match, Match Up, Memory, Pelmanism, Shinkei-suijaku, Pexeso or simply Pairs
 */

let cities = ['Prague', 'London', 'Paris', 'Moscow', 'Vancouver', 'Sydney', 'Tokyo', 'Helsinki', 'Hamburg', 'Lisbon'];
cities = cities.concat(cities);
cities.sort(function () {
  return 0.5 - Math.random();
});

const gameField = document.getElementById('game-field');
const pointsElement = document.getElementById('points');

let points = 0;
let firstCard = null;
let secondCard = null;
let firstCity = null;
let secondCity = null;
let revealed = 0;

function createCard(city) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.addEventListener('click', function () {
    if (firstCard != null && secondCard != null) {
      return;
    }
    if (card.classList.contains('revealed') == true) {
      return;
    }
    card.classList.add('revealed');
    card.innerText = city;
    if (firstCard == null) {
      firstCard = card;
      firstCity = city;
    } else {
      secondCard = card;
      secondCity = city;
      if (firstCity == secondCity) {
        points = points + 1;
        pointsElement.innerText = points;
        revealed = revealed + 2;
        firstCard = null;
        secondCard = null;
        firstCity = null;
        secondCity = null;
        if (revealed == cities.length) {
          const result = document.createElement('h2');
          result.innerText = 'Game over! Total points: ' + points;
          document.body.appendChild(result);
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
          firstCity = null;
          secondCity = null;
        }, 2000);
      }
    }
  });
  return card;
}

const allCards = document.createDocumentFragment();
for (let i = 0; i < cities.length; i++) {
  const card = createCard(cities[i]);
  allCards.appendChild(card);
}
gameField.appendChild(allCards);
