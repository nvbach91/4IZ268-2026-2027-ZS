/**
 * Memorama, Match Match, Match Up, Memory, Pelmanism, Shinkei-suijaku, Pexeso or simply Pairs
 */

(() => {
    const gameField = document.querySelector('#game-field');
    const pointsDisplay = document.querySelector('#points');

    let cities = [
        'Prague',
        'London',
        'Paris',
        'Tokyo',
        'Grodno',
        'Hamburg',
        'Madrid',
        'Vienna',
        'Brno',
        'Minsk',
    ];

    cities = cities.concat(cities);
    cities.sort(() => {
        return 0.5 - Math.random();
    });

    let points = 0;
    let firstCard = null;
    let secondCard = null;
    let revealedPairs = 0;
    const totalPairs = cities.length / 2;

    const updatePoints = () => {
        pointsDisplay.innerText = points;
    };

    const handleGameOver = () => {
        setTimeout(() => {
            alert(`Congratulations! You finished the game with ${points} points.`);
        }, 300);
    };

    const createCard = (cityName) => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.addEventListener('click', () => {
           
            if (firstCard && secondCard) {
                return;
            }

           
            if (card.classList.contains('revealed')) {
                return;
            }

            card.classList.add('revealed');
            card.innerText = cityName;

            if (!firstCard) {
                firstCard = { element: card, city: cityName };
                return;
            }

            secondCard = { element: card, city: cityName };

            if (firstCard.city === secondCard.city) {
                points += 1;
                revealedPairs += 1;
                firstCard = null;
                secondCard = null;
                updatePoints();

                if (revealedPairs === totalPairs) {
                    handleGameOver();
                }
            } else {
                points = Math.max(0, points - 1);
                updatePoints();

                setTimeout(() => {
                    firstCard.element.classList.remove('revealed');
                    firstCard.element.innerText = '';
                    secondCard.element.classList.remove('revealed');
                    secondCard.element.innerText = '';

                    firstCard = null;
                    secondCard = null;
                }, 2000);
            }
        });

        return card;
    };

    const fragment = document.createDocumentFragment();
    cities.forEach((city) => {
        fragment.appendChild(createCard(city));
    });

    gameField.appendChild(fragment);})();