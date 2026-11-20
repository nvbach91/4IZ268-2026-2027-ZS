/**
 * Memorama, Match Match, Match Up, Memory, Pelmanism, Shinkei-suijaku, Pexeso or simply Pairs
 */

var cities = ["Tokyo", "Paris", "New York City", "Cairo", "Sydney", "Rio de Janeiro", "London", "Cape Town", "Bangkok", "Toronto"];
cities = cities.concat(cities);
cities.sort(() => {
  return 0.5 - Math.random();
});

var firstCard = null;
var secondCard = null;
var points = 0;
var matchedPairs = 0;

const generateCards = () =>{
    const gameField = document.getElementById("game-field");
    const gamePoints = document.getElementById("points");
    gamePoints.innerText = points;
    gameField.replaceChildren();
    for(let i=0;i<cities.length;i++){
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerText = "?";
        const city = cities[i];
        cardElement.addEventListener('click', () => {
            revealCard(cardElement, city);
        });
        gameField.appendChild(cardElement);
    }
};

const revealCard = (cardElement, city) => {
    if (secondCard !== null || cardElement.classList.contains("revealed")) {
        return;
    }

    cardElement.innerText = city;
    cardElement.classList.add("revealed");
    if(firstCard===null) {
        firstCard = cardElement;
        return;
    }

    secondCard = cardElement;
    const gamePoints = document.getElementById("points");

    if(firstCard.innerText===secondCard.innerText) {
        points += 1;
        matchedPairs += 1;
        gamePoints.innerText = points;
        firstCard = null;
        secondCard = null;

        if (matchedPairs === cities.length / 2) {
            alert(`Final score: ${points}`);
        }
        return;
    }

    points = points-1
    if(points<0){
        points=0
    }
    gamePoints.innerText = points;

    setTimeout(() => {
        firstCard.innerText = "?";
        secondCard.innerText = "?";
        firstCard.classList.remove("revealed");
        secondCard.classList.remove("revealed");
        firstCard = null;
        secondCard = null;
    }, 2000);
};

generateCards()