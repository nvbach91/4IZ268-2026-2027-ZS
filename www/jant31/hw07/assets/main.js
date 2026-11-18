/**
- Memorama, Match Match, Match Up, Memory, Pelmanism, Shinkei-suijaku, Pexeso or simply Pairs
 */
const gameField = document.getElementById("game-field");
const pointsElement = document.getElementById("points");
let points = 0;

let fruits = ['Jablko', 'Banán', 'Jahoda', 'Hruška', 'Pomeranč', 'Švestka', 'Třešeň', 'Meloun', 'Hrozny', 'Kiwi'];
fruits = fruits.concat(fruits);
fruits.sort(() => {
    return 0.5 - Math.random();
});

for (let i = 0; i < fruits.length; i++) {
    const newItem = document.createElement("div");
    const par = document.createElement("p");

    par.innerText = fruits[i];

    newItem.classList.add('hidden');
    newItem.classList.add('card');

    newItem.addEventListener('click', () => {
        turning(newItem);
    });

    newItem.appendChild(par);
    gameField.appendChild(newItem);
}

let currTurned = [];
let matchedPairs = 0;
const turning = (clickedItem) => {
    // prevent click when waiting for hiding or its the same card
    if (currTurned.length === 2 || clickedItem.classList.contains('revealed')) {
        return;
    }

    // reveal card
    clickedItem.classList.add('revealed');
    clickedItem.classList.remove('hidden');
    currTurned.push(clickedItem);

    // revealed second card?
    if (currTurned.length === 2) {
        // same card
        if (currTurned[0].innerText === currTurned[1].innerText) {
            currTurned = [];
            points++;
            matchedPairs++;

            pointsElement.innerText = points;

            // end game
            if (matchedPairs === fruits.length / 2) {
                const winMessage = document.createElement("h2");
                winMessage.innerText = `Dokončil jsi hru. Tvé skóre je: ${points}!`;
                document.body.appendChild(winMessage);
            }
        } else {
            // not same - wait 1 sec then hide
            setTimeout(() => {
                currTurned[0].classList.remove('revealed');
                currTurned[0].classList.add('hidden');

                currTurned[1].classList.remove('revealed');
                currTurned[1].classList.add('hidden');

                if (points > 0) {
                    points--;
                }

                currTurned = [];

                pointsElement.innerText = points;
            }, 1000);
        }
    }
};