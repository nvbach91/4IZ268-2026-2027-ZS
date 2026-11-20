/**
 * Memorama, Match Match, Match Up, Memory, Pelmanism, Shinkei-suijaku, Pexeso or simply Pairs
 */

const gameField = document.querySelector("#game-field")
const scoreField = document.querySelector("#points")
let cities = ['Prague', 'Bratislava', "Berlín", "Varšava","Paříž","Londýn","Brusel","Madrid","Lisabon","Vídeň"];
let flippedCard1 = "placeholder"
let flippedCard2 = "placeholder"
let ammountFlipped = 0
let score = 0
cities = cities.concat(cities);
cities.sort(() => {
  return 0.5 - Math.random();
});

const createCard = (text) => {
  const newCard = document.createElement("div")
  newCard.innerText = text
  newCard.setAttribute('id', 'card');
  gameField.appendChild(newCard)
  newCard.addEventListener('click', () => {
    returnCards()
    ammountFlipped++
    newCard.setAttribute('id', 'cardRevealed');
    flip(text)
    
});
}

const createGamefield = () => {
        for (let i = 0; i < cities.length; i++) {
        createCard(cities[i])
    }
}

const removeCards = () => {
  const flippedCards = document.querySelectorAll("#cardRevealed")
      for (let i = 0; i < flippedCards.length; i++) {
        flippedCards[i].setAttribute('id', 'cardRemoved');
    }
}

const returnCards = () => {
  if (ammountFlipped===2) {
    ammountFlipped=0
    const flippedCards = document.querySelectorAll("#cardRevealed")
      for (let i = 0; i < flippedCards.length; i++) {
        flippedCards[i].setAttribute('id', 'card');
    }
  }
}

const evaluate = () => {
   if (flippedCard1===flippedCard2) {
    score++
    scoreField.innerText = score;
    flippedCard1 = "placeholder"
    flippedCard2 = "placeholder"
    removeCards()
   }
   else {
    if(score>0) {
    score=score-1
    scoreField.innerText = score;
    }
    flippedCard1 = "placeholder"
    flippedCard2 = "placeholder"
   }
}


const flip = (text) => {
      if (flippedCard1 === "placeholder") {
        flippedCard1=text
      }
      else {
        flippedCard2=text
        evaluate()
      }   
}



createGamefield()

console.log(cities[2])
console.log(cities.length)