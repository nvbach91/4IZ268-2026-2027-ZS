
const baseCities = [
    'Prague',
    'London',
    'Paris',
    'Moscow',
    'Vancouver',
    'Sydney',
    'Tokyo',
    'Cairo',
    'Rome',
    'Barcelona'
];

const gameField = document.getElementById('game-field');
const pointsOutput = document.getElementById('points');

let cities = [];
let points = 0;
let firstCard = null;
let secondCard = null;
let locked = false;
let matchedCards = 0;
let gameFinished = false;
let hideTimeout = null;

const statusOutput = document.createElement('p');
statusOutput.id = 'game-status';
statusOutput.setAttribute('aria-live', 'polite');
gameField.insertAdjacentElement('beforebegin', statusOutput);

const restartButton = document.createElement('button');
restartButton.type = 'button';
restartButton.id = 'restart-button';
restartButton.classList.add('restart-button');
restartButton.textContent = 'Hrát znovu';
restartButton.addEventListener('click', startGame);
gameField.insertAdjacentElement('afterend', restartButton);

function updatePoints() {
    pointsOutput.textContent = points;
}

function hideCard(card) {
    card.element.classList.remove('revealed');
    card.element.textContent = '';
    card.element.setAttribute('aria-label', 'Neodhalena karta');
    card.element.setAttribute('aria-pressed', 'false');
}

function finishGame() {
    gameFinished = true;
    statusOutput.classList.add('game-finished');
    statusOutput.textContent =
        `Výborně! Hra je dokončena. Celkem bodů: ${points}.`;
}

function handleCardClick(cardElement, city) {
    if (
        locked ||
        gameFinished ||
        cardElement.classList.contains('revealed') ||
        cardElement.classList.contains('matched')
    ) {
        return;
    }

    cardElement.classList.add('revealed');
    cardElement.textContent = city;
    cardElement.setAttribute('aria-label', city);
    cardElement.setAttribute('aria-pressed', 'true');

    const selectedCard = {
        element: cardElement,
        city: city
    };

    if (firstCard === null) {
        firstCard = selectedCard;
        statusOutput.textContent = 'Vyber ještě druhou kartu.';
        return;
    }

    secondCard = selectedCard;
    locked = true;

    if (firstCard.city === secondCard.city) {
        points += 1;
        matchedCards += 2;
        updatePoints();

        firstCard.element.classList.add('matched');
        secondCard.element.classList.add('matched');

        firstCard.element.disabled = true;
        secondCard.element.disabled = true;

        statusOutput.textContent = 'Správně! Našel jsi dvojici.';

        firstCard = null;
        secondCard = null;
        locked = false;

        if (matchedCards === cities.length) {
            finishGame();
        }

    } else {
        points = Math.max(0, points - 1);
        updatePoints();

        statusOutput.textContent =
            'To není shoda. Karty se za 2 sekundy skryjí.';

        hideTimeout = setTimeout(() => {

            hideCard(firstCard);
            hideCard(secondCard);

            firstCard = null;
            secondCard = null;
            locked = false;
            hideTimeout = null;

            statusOutput.textContent = 'Zkus najít další dvojici.';

        }, 2000);
    }
}

function createCard(city) {

    const card = document.createElement('button');

    card.type = 'button';
    card.classList.add('card');

    card.setAttribute('aria-label', 'Neodhalena karta');
    card.setAttribute('aria-pressed', 'false');

    card.addEventListener('click', () => {
        handleCardClick(card, city);
    });

    return card;
}

function startGame() {
    if (hideTimeout !== null) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
    }

    points = 0;
    firstCard = null;
    secondCard = null;
    locked = false;
    matchedCards = 0;
    gameFinished = false;

    statusOutput.classList.remove('game-finished');
    statusOutput.textContent =
        'Otáčej vždy dvě karty a najdi všechny dvojice měst.';

    cities = baseCities.concat(baseCities);
    cities.sort(() => 0.5 - Math.random());

    gameField.innerHTML = '';

    const cardsFragment = document.createDocumentFragment();
    cities.forEach((city) => {
        cardsFragment.appendChild(createCard(city));
    });
    gameField.appendChild(cardsFragment);

    updatePoints();
}

startGame();