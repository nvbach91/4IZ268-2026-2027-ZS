/**
 * Memorama, Match Match, Match Up, Memory, Pelmanism, Shinkei-suijaku, Pexeso or simply Pairs
 */

(() => {
  const BASE_CITIES = [
    'Prague',
    'London',
    'Paris',
    'Tokyo',
    'Sydney',
    'New York',
    'Vancouver',
    'Barcelona',
    'Helsinki',
    'Hamburg',
  ];

  const MISMATCH_DELAY_MS = 1500;

  const gameField = document.getElementById('game-field');
  const pointsElement = document.getElementById('points');

  let points = 0;
  let firstCard = null;
  let secondCard = null;
  let revealedPairsCount = 0;
  let totalPairs = 0;
  let cardValues = new WeakMap();
  let resultBanner = null;
  let hideTimerId = null;

  const updatePoints = (newPoints) => {
    points = Math.max(0, newPoints);
    pointsElement.innerText = String(points);
  };

  const shuffle = (items) => {
    const copy = items.slice();
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const showGameResult = () => {
    if (resultBanner) {
      resultBanner.remove();
    }
    resultBanner = document.createElement('div');
    resultBanner.classList.add('game-result');

    const message = document.createElement('p');
    const pointLabel = points === 1 ? 'point' : 'points';
    message.innerText = `Congratulations! You finished the game with ${points} ${pointLabel}.`;

    const restartButton = document.createElement('button');
    restartButton.type = 'button';
    restartButton.classList.add('restart-button');
    restartButton.innerText = 'Play Again';
    restartButton.addEventListener('click', startGame);

    resultBanner.appendChild(message);
    resultBanner.appendChild(restartButton);
    gameField.insertAdjacentElement('afterend', resultBanner);
  };

  const handleCardClick = (card) => {
    if (firstCard && secondCard) {
      return;
    }
    if (card === firstCard || card.classList.contains('revealed')) {
      return;
    }

    const city = cardValues.get(card);
    if (!city) {
      return;
    }

    card.classList.add('revealed');
    card.innerText = city;
    card.setAttribute('aria-label', city);

    if (!firstCard) {
      firstCard = card;
      return;
    }

    secondCard = card;

    if (cardValues.get(firstCard) === cardValues.get(secondCard)) {
      firstCard.classList.add('matched');
      secondCard.classList.add('matched');
      updatePoints(points + 1);
      revealedPairsCount += 1;
      firstCard = null;
      secondCard = null;

      if (revealedPairsCount === totalPairs) {
        showGameResult();
      }
      return;
    }

    updatePoints(points - 1);

    const cardA = firstCard;
    const cardB = secondCard;
    hideTimerId = setTimeout(() => {
      cardA.classList.remove('revealed');
      cardB.classList.remove('revealed');
      cardA.innerText = '';
      cardB.innerText = '';
      cardA.setAttribute('aria-label', 'Hidden card');
      cardB.setAttribute('aria-label', 'Hidden card');
      firstCard = null;
      secondCard = null;
      hideTimerId = null;
    }, MISMATCH_DELAY_MS);
  };

  const createCard = (city) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', 'Hidden card');
    cardValues.set(card, city);

    card.addEventListener('click', () => {
      handleCardClick(card);
    });

    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleCardClick(card);
      }
    });

    return card;
  };

  const startGame = () => {
    if (hideTimerId !== null) {
      clearTimeout(hideTimerId);
      hideTimerId = null;
    }
    if (resultBanner) {
      resultBanner.remove();
      resultBanner = null;
    }

    firstCard = null;
    secondCard = null;
    revealedPairsCount = 0;
    cardValues = new WeakMap();
    updatePoints(0);

    const deck = shuffle(BASE_CITIES.concat(BASE_CITIES));
    totalPairs = BASE_CITIES.length;

    const fragment = document.createDocumentFragment();
    deck.forEach((city) => {
      fragment.appendChild(createCard(city));
    });

    gameField.innerHTML = '';
    gameField.appendChild(fragment);
  };

  startGame();
})();