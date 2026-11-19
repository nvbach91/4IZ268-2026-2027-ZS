/**
 * Memorama, Match Match, Match Up, Memory, Pelmanism, Shinkei-suijaku, Pexeso or simply Pairs
 */

// seznam měst
let cities = ['Prague', 'London', 'Paris', 'Moscow', 'California',
  'Vancouver', 'Sydney', 'Tokyo', 'New York', 'Rio de Janeiro'];
// duplikovat seznam měst
cities = cities.concat(cities);
// zamíchat
cities.sort(() => 0.5 - Math.random());

// prvky na stránce
const gameField = document.querySelector('#game-field');
const pointsElement = document.querySelector('#points');

// stav hry
let points = 0;
let firstCard = null;
let secondCard = null;
let revealedCount = 0;

// vytvoří jednu kartu
function createCard(city) {
  const card = document.createElement('div');
  card.classList.add('card');

  card.addEventListener('click', () => {
    // během 2 sekund čekání nejde otáčet další karty
    if (firstCard !== null && secondCard !== null) {
      return;
    }
    // už otočenou kartu nejde otočit znovu
    if (card.classList.contains('revealed')) {
      return;
    }

    // název města se do karty zapíše až teď, aby nešel vyčíst z HTML
    card.innerText = city;
    card.classList.add('revealed');

    if (firstCard === null) {
      firstCard = card;
    } else {
      secondCard = card;
      checkCards();
    }
  });

  return card;
}

// porovná dvě otočené karty
function checkCards() {
  if (firstCard.innerText === secondCard.innerText) {
    // shoda: +1 bod, karty zůstanou otočené
    points++;
    revealedCount += 2;
    pointsElement.innerText = points;
    firstCard = null;
    secondCard = null;

    if (revealedCount === cities.length) {
      endGame();
    }
  } else {
    // neshoda: -1 bod (ale ne do minusu), karty se po 2 s otočí zpět
    if (points > 0) {
      points--;
    }
    pointsElement.innerText = points;

    setTimeout(() => {
      firstCard.innerText = '';
      secondCard.innerText = '';
      firstCard.classList.remove('revealed');
      secondCard.classList.remove('revealed');
      firstCard = null;
      secondCard = null;
    }, 2000);
  }
}

// konec hry
function endGame() {
  const message = document.createElement('h2');
  message.innerText = 'Konec hry! Celkový počet bodů: ' + points;
  document.body.appendChild(message);
}

// vytvořit všechny karty a vložit je do hrací plochy najednou
const fragment = document.createDocumentFragment();
for (const city of cities) {
  fragment.appendChild(createCard(city));
}
gameField.appendChild(fragment);
