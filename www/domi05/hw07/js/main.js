/**
 * Memorama, Match Match, Match Up, Memory, Pelmanism, Shinkei-suijaku, Pexeso or simply Pairs
 */

let cities = [
  'Prague',
  'London',
  'Paris',
  'New York',
  'Tokyo',
  'Rome',
  'Berlin',
  'Amsterdam',
  'Seoul',
  'Istanbul'
];


cities = cities.concat(cities);
cities.sort(() => {
  return 0.5 - Math.random();
});

const gameField = document.querySelector( "#game-field" );
const pointsOut = document.querySelector( "#points" ); 

let points = 0;
let firstCard = null;
let secondCard = null;
let waiting = false;

cities.forEach( city => {
  const card = document.createElement( "div" );
  const text = document.createElement( "span" );
  text.innerHTML = city;
  text.classList.add( "card-text" );
  card.append( text );
  card.classList.add( "card" );
  card.addEventListener( "click", () => {

    if( waiting ) return;

    if( card.classList.contains( "revealed" ) ) return;
    card.classList.add( "revealed" );

    if( !firstCard ) {
      firstCard = card;
      return;
    }

    secondCard = card;

    if( firstCard.innerText === secondCard.innerText ) {
      points++;
      pointsOut.innerText = points;
      firstCard.classList.add( "revealed-correct" );
      secondCard.classList.add( "revealed-correct" );
      
      resetCards();
    }
    else {
      waiting = true;
      setTimeout( () => {
        firstCard.classList.remove( "revealed" );
        secondCard.classList.remove( "revealed" );

        resetCards();
      }, 2000);
    }
  })
  gameField.append( card );
});

function resetCards() {
  firstCard = null;
  secondCard = null;
  waiting = false;
}

