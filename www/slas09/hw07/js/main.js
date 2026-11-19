let cities = [
  'Prague', 'London', 'Paris', 'Belgrade', 'Vancouver',
  'Sydney', 'Tokyo', 'Antananarivo', 'Thessaloniki', 'Barcelona'
];
cities = cities.concat(cities);
cities.sort(() => 0.5 - Math.random());

const gameField = document.querySelector('#game-field');
const pointsElement = document.querySelector('#points');
const result = document.createElement('p');
let firstCard = null;
let secondCard = null;
let points = 0;
let foundPairs = 0;

function showPoints() {
  pointsElement.innerText = points;
}

function turnCard(card) {
  if (firstCard && secondCard) {
    return;
  }

  if (card.classList.contains('revealed') || card.classList.contains('matched')) {
    return;
  }

  card.classList.add('revealed');

  if (!firstCard) {
    firstCard = card;
    return;
  }

  secondCard = card;
  const isMatch = firstCard.innerText === secondCard.innerText;

  if (isMatch) {
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    points += 1;
    foundPairs += 1;
    firstCard = null;
    secondCard = null;

    if (foundPairs === cities.length / 2) {
      result.innerText = `Game over! Your total score is ${points}.`;
      result.classList.add('finished');
    }
    showPoints();
    return;
  }

  points = Math.max(0, points - 1);
  showPoints();

  setTimeout(() => {
    firstCard.classList.remove('revealed');
    secondCard.classList.remove('revealed');
    firstCard = null;
    secondCard = null;
  }, 1000);
}

const cards = cities.map((city) => {
  const card = document.createElement('button');
  card.classList.add('card');
  card.type = 'button';
  card.innerText = city;
  card.addEventListener('click', () => turnCard(card));
  return card;
});

gameField.append(...cards);
gameField.after(result);