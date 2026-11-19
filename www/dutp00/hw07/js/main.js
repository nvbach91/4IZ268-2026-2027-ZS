/**
 * Memorama, Match Match, Match Up, Memory, Pelmanism, Shinkei-suijaku, Pexeso or simply Pairs
 */

let cities = [
    'Prague',
    'London',
    'Paris',
    'Berlin',
    'Rome',
    'Madrid',
    'Tokyo',
    'Sydney',
    'New York',
    'Vancouver'
];

cities = cities.concat(cities);
cities.sort(() => 0.5 - Math.random());

const gameField = document.getElementById('game-field');
const pointsElement = document.getElementById('points');

let points = 0;
let card1 = null;
let card2 = null;
let lockBoard = false;
let matchedPairs = 0;

const onCardClick = (card) => {
    if (lockBoard || card.classList.contains('revealed') || card === card1) {
        return;
    }

    card.classList.add('revealed');
    card.innerText = card.cityName;

    if (!card1) {
        card1 = card;
        return;
    }

    card2 = card;

    if (card1.cityName === card2.cityName) {
        points += 1;
        pointsElement.innerText = points;
        matchedPairs += 1;
        card1 = null;
        card2 = null;

        if (matchedPairs === cities.length / 2) {
            setTimeout(() => {
                alert(`Game over! Your score: ${points} points.`);
            }, 300);
        }
    } else {
        points = Math.max(0, points - 1);
        pointsElement.innerText = points;
        lockBoard = true;

        setTimeout(() => {
            card1.classList.remove('revealed');
            card1.innerText = '';
            card2.classList.remove('revealed');
            card2.innerText = '';
            card1 = null;
            card2 = null;
            lockBoard = false;
        }, 1500);
    }
};

const fragment = document.createDocumentFragment();

cities.forEach((city) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.cityName = city;
    card.addEventListener('click', () => onCardClick(card));
    fragment.appendChild(card);
});

gameField.appendChild(fragment);
