/**
 * Memorama, Match Match, Match Up, Memory, Pelmanism, Shinkei-suijaku, Pexeso or simply Pairs
 */

let cities = ['Prague', 'London', 'Paris', 'Moscow', 'California', 'Vancouver', 'Sydney', 'Tokyo', 'Berlin', 'Rome'];
cities = cities.concat(cities);
cities.sort(() => 0.5 - Math.random());

let points = 0;
let firstCard = null;
let secondCard = null;

const gameField = document.querySelector('#game-field');
const pointsElement = document.querySelector('#points');

function createCard(cityName) {
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerText = cityName;

    card.addEventListener('click', function() {
        if (firstCard && secondCard) return;
        
        if (card.classList.contains('revealed')) return;

        card.classList.add('revealed');

        if (!firstCard) {
            firstCard = card;
        } else {
            secondCard = card;

            if (firstCard.innerText === secondCard.innerText) {
                points++;
                pointsElement.innerText = points;
                firstCard = null;
                secondCard = null;
                
                let revealedCards = document.querySelectorAll('.card.revealed');
                if (revealedCards.length === cities.length) {
                    setTimeout(() => {
                        alert('Konec hry! Tvůj celkový počet bodů je: ' + points);
                    }, 500);
                }
            } else {
                points--;
                if (points < 0) {
                    points = 0;
                }
                pointsElement.innerText = points;
                
                setTimeout(() => {
                    firstCard.classList.remove('revealed');
                    secondCard.classList.remove('revealed');
                    firstCard = null;
                    secondCard = null;
                }, 2000);
            }
        }
    });

    return card;
}

for (let i = 0; i < cities.length; i++) {
    let cardElement = createCard(cities[i]);
    gameField.appendChild(cardElement);
}