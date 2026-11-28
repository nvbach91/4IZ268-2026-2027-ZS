(() => {
    let cities = [
        'Prague',
        'London',
        'Paris',
        'Tokyo',
        'Sydney',
        'Vancouver',
        'Madrid',
        'Rome',
        'Berlin',
        'Oslo'
    ];

    cities = cities.concat(cities);
    cities.sort(() => {
        return 0.5 - Math.random();
    });

    const gameField = document.querySelector('#game-field');
    const pointsDisplay = document.querySelector('#points');

    let points = 0;
    let firstCard = null;
    let secondCard = null;
    let revealedCount = 0;

    const createCard = (city) => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.addEventListener('click', () => {
            if (firstCard && secondCard) {
                return;
            }

            if (card === firstCard || card.classList.contains('revealed')) {
                return;
            }

            card.classList.add('revealed');
            card.innerText = city;

            if (!firstCard) {
                firstCard = card;
                return;
            }

            secondCard = card;

            if (firstCard.innerText === secondCard.innerText) {
                points += 1;
                pointsDisplay.innerText = points;
                revealedCount += 2;
                firstCard = null;
                secondCard = null;

                if (revealedCount === cities.length) {
                    setTimeout(() => {
                        alert(`Game over! Your total points: ${points}`);
                    }, 300);
                }
            } else {
                points = Math.max(0, points - 1);
                pointsDisplay.innerText = points;

                setTimeout(() => {
                    firstCard.classList.remove('revealed');
                    secondCard.classList.remove('revealed');
                    firstCard.innerText = '';
                    secondCard.innerText = '';
                    firstCard = null;
                    secondCard = null;
                }, 2000);
            }
        });

        return card;
    };

    const cards = [];

    for (let i = 0; i < cities.length; i += 1) {
        cards.push(createCard(cities[i]));
    }

    gameField.append(...cards);
})();