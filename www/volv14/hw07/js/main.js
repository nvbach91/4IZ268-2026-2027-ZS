let cities = [
    'Prague', 'London', 'Paris', 'Moscow', 'California', 
    'Vancouver', 'Sydney', 'Tokyo', 'Berlin', 'Rome'
];

cities = cities.concat(cities);

cities.sort(() => {
    return 0.5 - Math.random();
});

const gameField = document.getElementById('game-field');
const pointsElement = document.getElementById('points');

let points = 0;
let firstCard = null;
let secondCard = null;
let matchedPairs = 0;

function createCard(cityName) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerText = cityName;

    card.addEventListener('click', () => {
        if (firstCard && secondCard || card.classList.contains('revealed')) {
            return;
        }

        card.classList.add('revealed');

        if (!firstCard) {
            firstCard = card;
        } else {
            secondCard = card;
            checkMatch();
        }
    });

    return card;
}

function checkMatch() {
    if (firstCard.innerText === secondCard.innerText) {
        points += 1;
        matchedPairs += 1;
        updatePoints();
        resetTurn();

        if (matchedPairs === 10) {
            setTimeout(() => {
                alert(`Gratulujeme! Hra skončila. Tvůj celkový počet bodů: ${points}`);
            }, 300);
        }
    } else {
        points = Math.max(0, points - 1);
        updatePoints();

        setTimeout(() => {
            firstCard.classList.remove('revealed');
            secondCard.classList.remove('revealed');
            resetTurn();
        }, 2000);
    }
}

function resetTurn() {
    firstCard = null;
    secondCard = null;
}

function updatePoints() {
    pointsElement.innerText = points;
}

const fragment = document.createDocumentFragment();
cities.forEach(city => {
    const cardElement = createCard(city);
    fragment.appendChild(cardElement);
});
gameField.appendChild(fragment);