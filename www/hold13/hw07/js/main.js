/**
 * Memorama, Match Match, Match Up, Memory, Pelmanism, Shinkei-suijaku, Pexeso or simply Pairs
 */
let cities = ['Prague', 'London', 'Paris', 'Moscow', 'California', 'Vancouver', 'Sydney', 'Tokyo', 'Berlin', 'Rome'];

cities = cities.concat(cities);

cities.sort(() => {
  return 0.5 - Math.random();
});

const gameField = document.querySelector('#game-field');
const pointsDOM = document.querySelector('#points');

let points = 0;
let firstCard = null;
let secondCard = null;
let matchedCards = 0;
let lockBoard = false;

function createBoard() {
    const fragment = document.createDocumentFragment();
    
    cities.forEach(city => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.name = city;
        
        const text = document.createElement('span');
        text.innerText = city;
        card.appendChild(text);
        
        card.addEventListener('click', () => flipCard(card));
        fragment.appendChild(card);
    });
    
    gameField.appendChild(fragment);
}

function flipCard(card) {
    if (lockBoard) return; 
    if (card === firstCard) return; 
    if (card.classList.contains('revealed')) return;

    card.classList.add('revealed');

    if (!firstCard) {
        firstCard = card;
        return;
    }

    secondCard = card;
    lockBoard = true;

    checkMatch();
}

function checkMatch() {
    const isMatch = firstCard.dataset.name === secondCard.dataset.name;

    if (isMatch) {
        updatePoints(1);
        matchedCards += 2;
        resetTurn();
        
        if (matchedCards === cities.length) {
            setTimeout(() => alert(`Hra skončila! Celkový počet bodů: ${points}`), 500);
        }
    } else {
        updatePoints(-1);
        setTimeout(() => {
            firstCard.classList.remove('revealed');
            secondCard.classList.remove('revealed');
            resetTurn();
        }, 2000); 
    }
}

function updatePoints(change) {
    points += change;
    if (points < 0) {
        points = 0; 
    }
    pointsDOM.innerText = points;
}

function resetTurn() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

createBoard();