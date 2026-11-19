
let cities = ['Prague', 'London', 'Paris', 'Tokyo', 'Sydney', 'Berlin', 'Rome', 'Madrid', 'Vienna', 'Oslo'];
cities = cities.concat(cities);
cities.sort(() => {
  return 0.5 - Math.random();
});

const gameField = document.querySelector('#game-field');
const pointsElement = document.querySelector('#points');

let points = 0;
let firstCard = null;
let secondCard = null;
let matchedCount = 0;

const updatePoints = () => {
  pointsElement.innerText = points;
};

const endGame = () => {
  const result = document.createElement('p');
  result.classList.add('result');
  result.innerText = 'Game over! Total points: ' + points;
  document.body.appendChild(result);
};

const resetTurn = () => {
  firstCard = null;
  secondCard = null;
};

const hideCard = (card) => {
  card.classList.remove('revealed');
  card.innerText = '';
};

const createCard = (city) => {
  const card = document.createElement('div');
  card.classList.add('card');

  card.addEventListener('click', () => {
    if (secondCard || card.classList.contains('revealed')) {
      return;
    }

    card.classList.add('revealed');
    card.innerText = city;

    if (!firstCard) {
      firstCard = { element: card, city: city };
      return;
    }

    secondCard = { element: card, city: city };

    if (firstCard.city === secondCard.city) {
      points++;
      matchedCount += 2;
      firstCard.element.classList.add('matched');
      secondCard.element.classList.add('matched');
      updatePoints();
      resetTurn();
      if (matchedCount === cities.length) {
        endGame();
      }
    } else {
      if (points > 0) {
        points--;
      }
      updatePoints();
      setTimeout(() => {
        hideCard(firstCard.element);
        hideCard(secondCard.element);
        resetTurn();
      }, 2000);
    }
  });

  return card;
};

const fragment = document.createDocumentFragment();
cities.forEach((city) => {
  fragment.appendChild(createCard(city));
});
gameField.appendChild(fragment);
