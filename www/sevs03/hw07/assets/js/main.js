
let cities = ['Prague', 'Bratislava', 'Dublin', 'Vienna', 'Berlin', 'Paris', 'Warsaw', 'Budapest', 'Barcelona', 'Dortmund',];
cities = cities.concat(cities);
cities.sort(() => {
    return 0.5 - Math.random();
});

let score = 0;
let firstCard = null;
let secondCard = null;
let matchedPairs = 0;

const scoreDisplay = document.querySelector('#points');
const gameBoard = document.querySelector('#game-field');

const createCard = (city) => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.addEventListener('click', () => {
        if ((firstCard !== null && secondCard !== null) || card.classList.contains('flipped') || card.classList.contains('matched')) {
            return;
        }
        card.classList.add('flipped');
        card.textContent = city;
        if (firstCard === null) {
            firstCard = card;
        } else {
            secondCard = card;
            checkMatch();
        }
    });
    return card;
};

const checkMatch = () => {
    if (firstCard.textContent === secondCard.textContent) {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        score += 1;
        scoreDisplay.textContent = score;
        matchedPairs += 1;
        firstCard = null;
        secondCard = null;
        if (matchedPairs === cities.length / 2) {
            setTimeout(() => {
                alert(`Game Over! Your final score: ${score}`);
            }, 300);

            document.body.appendChild(button);
            button.innerText = 'Play Again';
        };

    } else {
        if (score > 0) {
            score -= 1;
            scoreDisplay.textContent = score;
        }
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            firstCard.textContent = '';
            secondCard.textContent = '';
            firstCard = null;
            secondCard = null
        }, 1000);
    }
}
for (let i = 0; i < cities.length; i++) {
    gameBoard.appendChild(createCard(cities[i]));
}
const button = document.createElement('button');
button.addEventListener('click', () => {
    location.reload();

});

