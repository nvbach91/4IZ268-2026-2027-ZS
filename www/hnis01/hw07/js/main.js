const Gfield = document.querySelector('#game-field');
const points = document.querySelector('#points');
let click1 = null;
let click2 = null;
let card1 = null;
let card2 = null;
let score = 0;
let isLocked = false;

let famousCities = [
    'Kyoto',
    'Prague',
    'Istanbul',
    'Venice',
    'Cairo',
    'Edinburgh',
    'Vienna',
    'Lisbon',
    'Athens',
    'Florence'
];

const flipBack = () => {
    card1.classList.remove('revealed');
    card1.textContent = null;
    card2.classList.remove('revealed');
    card2.textContent = null;
    isLocked = false
}



const CreateCard = (value) => {
    const PlayingCard = document.createElement('div');
    PlayingCard.classList.add("card");
    PlayingCard.addEventListener('click', () => {

        if (isLocked || PlayingCard.classList.contains('revealed')) {
            return;
        }


        PlayingCard.classList.add('revealed');
        PlayingCard.textContent = value;

        if (click1 == null) {
            click1 = value;
            card1 = PlayingCard;
        } else if (click2 == null) {
            click2 = value;
            card2 = PlayingCard;
            if (click1 == click2) {
                score++;
                points.textContent = score;
            } else {
                isLocked = true;
                setTimeout(flipBack, 2000)
            }
            click1 = null;
            click2 = null;

        }

    });
    return PlayingCard;
};



famousCities = famousCities.concat(famousCities);

famousCities.sort(() => {
    return 0.5 - Math.random();
});

const cardsToAppend = [];

for (let i = 0; i < famousCities.length; i++) {
    const PlayingCard = CreateCard(famousCities[i]);
    cardsToAppend.push(PlayingCard); 
}


Gfield.append(...cardsToAppend);
