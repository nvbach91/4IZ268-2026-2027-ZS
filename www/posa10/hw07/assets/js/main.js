/**
 * Memorama, Match Match, Match Up, Memory, Pelmanism, Shinkei-suijaku, Pexeso or simply Pairs
 */

let cities = ['Prague', 'Sofia', 'Barcelona', 'Podgorica', 'Berlin', 'Paris', 'Warsaw', 'Athens', 'Bratislava', 'Skopje'];
cities = cities.concat(cities);
cities.sort(() => {
  return 0.5 - Math.random();
});

const points = document.querySelector('#points');
const gameFieldContainer = document.querySelector('#game-field');
const body = document.querySelector('body');

let pointCount = 0;
let turnedCards = [];
let pairedCards = 0;

const createCard = (city) => {
    const card = document.createElement('button');
    card.classList.add('card');
    card.innerText = '';

    card.addEventListener('click', () => {
        if (turnedCards.length === 2 || card.classList.contains('paired') || card.classList.contains('revealed')){
            return;
        }
        
        card.classList.add('revealed');
        card.innerText = city;
        turnedCards.push(card);
        
        if (turnedCards.length === 2){
            
            if (turnedCards[0].innerText === turnedCards[1].innerText){
                pointCount += 1;
                pairedCards +=1 ;
                turnedCards[0].classList.add('paired');
                turnedCards[1].classList.add('paired');
                turnedCards = [];
                points.innerText = `${pointCount}`;

                if (pairedCards === cities.length / 2) {
                const winMessage = document.createElement('h3');
                winMessage.innerText = `The end! Your score is ${pointCount}!`;
                body.appendChild(winMessage); 
                }
            }
            else {
                setTimeout(() => {
                    turnedCards[0].classList.remove('revealed');
                    turnedCards[0].innerText = '';
                    turnedCards[1].classList.remove('revealed');
                    turnedCards[1].innerText = '';

                    turnedCards = [];

                }, 1500);
                
                if (pointCount > 0) {
                        pointCount -= 1;
                    }
                points.innerText = `${pointCount}`;
            }

        
        }

       
    });

    gameFieldContainer.appendChild(card);
    return card;
};

cities.forEach((city) => {
    createCard(city);
});