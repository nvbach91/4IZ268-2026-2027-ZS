const initialCities = ['Prague', 'London', 'Paris', 'Tokyo', 'Sydney', 'New York', 'Berlin', 'Rome', 'Madrid', 'Oslo'];
let cities = initialCities.concat(initialCities);
cities.sort(() => 0.5 - Math.random());

let score = 0;
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchedPairs = 0;

const board = document.getElementById('game-board');
const scoreElement = document.getElementById('score');

function updateScore(points) {
    score += points;
    if (score < 0) score = 0;
    scoreElement.textContent = score;
}

function createBoard() {
    const fragment = document.createDocumentFragment();
    
    cities.forEach(city => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.textContent = city;
        cardElement.dataset.city = city;
        cardElement.addEventListener('click', flipCard);
        fragment.appendChild(cardElement);
    });

    board.appendChild(fragment);
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    if (this.classList.contains('matched')) return;

    this.classList.add('flipped');

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    const isMatch = firstCard.dataset.city === secondCard.dataset.city;

    if (isMatch) {
        updateScore(1);
        disableCards();
    } else {
        updateScore(-1);
        unflipCards();
    }
}

function disableCards() {
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    
    matchedPairs++;
    resetBoard();

    if (matchedPairs === initialCities.length) {
        setTimeout(() => {
            alert(`Hra skončila! Celkový počet bodů: ${score}`);
        }, 300);
    }
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetBoard();
    }, 2000);
}

function resetBoard() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

createBoard();