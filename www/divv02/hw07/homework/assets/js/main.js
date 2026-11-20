/**
 * Memorama, Match Match, Match Up, Memory, Pelmanism, Shinkei-suijaku, Pexeso or simply Pairs
 */

const gameField = document.getElementById('game-field');
const pointsElement = document.getElementById('points');

let umas = [
  'Aston Machan', 'Curren Chan', 'Daitaku Helios', 'Gold Ship', 'Haru Urara', 'Kitasan Black',
  'Mejiro McQueen', 'Nice Nature', 'Oguri Cap', 'Rice Shower', 'Satono Diamond', 'Shinko Windy',
  'Smart Falcon', 'Still in Love', 'Sweep Tosho', 'Tamamo Cross', 'TM Opera O', 'Tokai Teio'
];
umas = umas.concat(umas).sort(() => 0.5 - Math.random());

let firstCard = null;
let secondCard = null;
let points = 0;
let matchedCount = 0;

function resetTurn() {
  firstCard = null;
  secondCard = null;
}

function handleClick(card, uma) {
  if ((firstCard && secondCard) || card.classList.contains('revealed')) {
    return;
  }

  const file = uma.toLowerCase().replace(/\s+/g, '_');
  card.style.backgroundImage = `url('pictures/${file}.png')`;
  card.classList.add('revealed');

  if (!firstCard) {
    firstCard = card;
    return;
  }

  secondCard = card;

  if (firstCard.dataset.uma === secondCard.dataset.uma) {
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    matchedCount += 2;
    points += 1;
    pointsElement.innerText = points;
    resetTurn();

    if (matchedCount === umas.length) {
      setTimeout(() => alert(`Congratulations Torena, your final score is ${points} points!`), 250);
    }
    return;
  }

  points = Math.max(0, points - 1);
  pointsElement.innerText = points;

  setTimeout(() => {
    firstCard.classList.remove('revealed');
    firstCard.style.backgroundImage = '';
    secondCard.classList.remove('revealed');
    secondCard.style.backgroundImage = '';
    resetTurn();
  }, 2000);
}

const fragment = document.createDocumentFragment();
for (let i = 0; i < umas.length; i++) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.uma = umas[i];
  card.addEventListener('click', () => handleClick(card, umas[i]));
  fragment.appendChild(card);
}
gameField.appendChild(fragment);