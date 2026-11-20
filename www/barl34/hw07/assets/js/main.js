/**
 * Memorama, Match Match, Match Up, Memory, Pelmanism, Shinkei-suijaku, Pexeso or simply Pairs
 */

(function () {
  const gameField = document.getElementById('game-field');
  const pointsElement = document.getElementById('points');

  // seznam měst, každé je tam dvakrát
  const cityList = [
    'Prague', 'London', 'Paris', 'Moscow', 'Vancouver',
    'Sydney', 'Tokyo', 'Cairo', 'Helsinki', 'Lima'
  ];
  const cities = cityList.concat(cityList);

  // Fisher-Yates míchání
  for (let i = cities.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cities[i], cities[j]] = [cities[j], cities[i]];
  }

  let points = 0;
  let revealedCount = 0;
  let firstCard = null;
  let secondCard = null;

  // zpráva na konci hry, vytvořená v JS (HTML se nemění)
  const message = document.createElement('p');
  message.id = 'message';
  gameField.after(message);

  function createCard(index) {
    const card = document.createElement('div');
    card.classList.add('card');
    // název města se do DOMu nedává, dokud není karta otočená
    card.addEventListener('click', function () {
      onCardClick(card, index);
    });
    return card;
  }

  function reveal(card, index) {
    card.textContent = cities[index];
    card.classList.add('revealed');
  }

  function cover(card) {
    card.textContent = '';
    card.classList.remove('revealed');
  }

  function onCardClick(card, index) {
    // dvě karty už jsou otočené, čeká se na konec tahu
    if (firstCard && secondCard) return;
    // už odhalená karta se ignoruje
    if (card.classList.contains('revealed')) return;

    reveal(card, index);

    if (!firstCard) {
      firstCard = { element: card, index: index };
      return;
    }

    secondCard = { element: card, index: index };

    if (cities[firstCard.index] === cities[secondCard.index]) {
      points++;
      revealedCount += 2;
      firstCard = null;
      secondCard = null;
      pointsElement.textContent = points;

      if (revealedCount === cities.length) {
        message.textContent = 'Game over! Total points: ' + points;
      }
    } else {
      points = Math.max(0, points - 1);
      pointsElement.textContent = points;

      setTimeout(function () {
        cover(firstCard.element);
        cover(secondCard.element);
        firstCard = null;
        secondCard = null;
      }, 2000);
    }
  }

  // všechny karty se vytvoří a vloží do plochy najednou
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < cities.length; i++) {
    fragment.appendChild(createCard(i));
  }
  gameField.appendChild(fragment);
})();