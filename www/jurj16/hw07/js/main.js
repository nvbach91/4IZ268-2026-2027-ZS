/**
 * Memorama, Match Match, Match Up, Memory, Pelmanism, Shinkei-suijaku, Pexeso or simply Pairs
 */
const WRONG_MATCH_HIDE_DELAY = 800;

const gf = document.querySelector('#game-field');
const points = document.querySelector('#points');
const body = document.querySelector('body');

let items = ['Python', 'Rust', 'Go', 'Java', 'Ruby', 'Swift', 'Kotlin', 'Perl', 'Lua', 'Dart'];
items = items.concat(items);
items.sort(() => {
  return 0.5 - Math.random();
});

gf.style.setProperty('--max-card-width', `${items.reduce((acc, str) => {
  return Math.max(acc, str.length);
}, 10)}em`);

const cardMap = new Map();
items.forEach(c => {
  const card = document.createElement('div');
  card.classList.add('card');
  cardMap.set(card, c);
  gf.appendChild(card);
});

let firstCard = null;
let locked = false;
let score = 0;

gf.addEventListener('click', e => {
  const card = e.target.closest('.card');
  if (!card || locked || card.classList.contains('revealed')) return;

  card.textContent = cardMap.get(card);
  card.classList.add('revealed');

  if (!firstCard) {
    firstCard = card;
    return;
  }

  const a = firstCard;
  const b = card;
  firstCard = null;
if (cardMap.get(a) === cardMap.get(b)) {
  score += 1;
  if (![...cardMap.keys()].some(c => !c.classList.contains('revealed'))) {
    points.textContent = score;
    const winnerMessage = document.createElement('h2');
    winnerMessage.textContent = `Game over! Total points: ${score}`;
    body.appendChild(winnerMessage);
  }
} else {
    score = score > 0 ? score - 1 : score;
    locked = true;
    setTimeout(() => {
      [a, b].forEach(c => {
        c.textContent = '';
        c.classList.remove('revealed');
      });
      locked = false;
    }, WRONG_MATCH_HIDE_DELAY);
  }

  points.textContent = score;
});
