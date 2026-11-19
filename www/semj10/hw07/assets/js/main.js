let cities = ['Novigrad', 'Oxenfurt', 'Vizima', 'Kaer Morhen', 'White Orchard',
              'Velen', 'Skellige', 'Toussaint', 'Cintra', 'Kaedwen'];
cities = cities.concat(cities);
cities.sort(() => 0.5 - Math.random());

const field = document.querySelector('#game-field');
const pointsEl = document.querySelector('#points');

let points = 0;
let firstCard = null;
let secondCard = null;
let foundPairs = 0;

function createCard(city) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.addEventListener('click', () => flipCard(card, city));
  return card;
}

function flipCard(card, city) {
  if (secondCard || card.classList.contains('revealed')) return;

  card.innerText = city;
  card.classList.add('revealed');

  if (!firstCard) {
    firstCard = { card, city };
    return;
  }

  secondCard = { card, city };

  if (firstCard.city === secondCard.city) {
    points++;
    foundPairs++;
    firstCard.card.classList.add('matched');
    secondCard.card.classList.add('matched');
    endTurn();
  } else {
    points = Math.max(0, points - 1);
    setTimeout(() => {
      [firstCard.card, secondCard.card].forEach(c => {
        c.innerText = '';
        c.classList.remove('revealed');
      });
      endTurn();
    }, 2000);
  }
  pointsEl.innerText = points;
}

function endTurn() {
  firstCard = null;
  secondCard = null;

  if (foundPairs === cities.length / 2) {
    const msg = document.createElement('p');
    msg.classList.add('game-over');
    msg.innerText = `Game over! Your total points: ${points}`;
    document.body.appendChild(msg);
  }
}

const fragment = document.createDocumentFragment();
cities.forEach(city => fragment.appendChild(createCard(city)));
field.appendChild(fragment);