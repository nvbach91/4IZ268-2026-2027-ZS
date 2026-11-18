
const gameField = document.querySelector('#game-field');
const pointsElement = document.querySelector('#points');


let characters = ["Harry Potter", "Luna Lovegood", "Remus Lupin", "Ron Weasley", "Hermione Granger", "Albus Dumbledore", "Minerva McGonagall", "Severus Snape", "Rubeus Hagrid", "Lord Voldemort", "Draco Malfoy", "Neville Longbottom", "Ginny Weasley", "Sirius Black", "Dobby"];
characters = characters.concat(characters);
characters.sort(() => {
    return 0.5 - Math.random();
});

let points = 0;
let firstCard = null;
let secondCard = null;
let matchedCardsCount = 0;

const createCard = (characterName) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerText = "";

    card.addEventListener("click", () => {
        // 1. Ochrana: ignoruje kliknutí, pokud se čeká, kliká se na stejnou kartu, nebo už je odkrytá
        if (secondCard || card === firstCard || card.classList.contains('revealed')) {
            return;
        }

        card.innerText = characterName;
        // 2. Otočení karty 
        card.classList.add('revealed');

        // 3. Uložení do firstCard nebo secondCard
        if (!firstCard) {
            firstCard = card;
            return; // čekáme na druhou kartu
        }

        secondCard = card;
        // porovnáme obě karty
        if (firstCard.innerText === secondCard.innerText) {
            points++;
            pointsElement.innerText = points;
            matchedCardsCount += 2;
            firstCard = null;
            secondCard = null;

            if (matchedCardsCount === characters.length) {
                const modal = document.createElement("div");
                modal.classList.add("win-modal");

                const message = document.createElement('p');
                message.innerText = "Perfect, you found all pairs. Total points: " +points;

                const restartBtn = document.createElement("button");
                restartBtn.innerText = "Play again";
                restartBtn.addEventListener("click", () => {
                    location.reload();
                });

                modal.appendChild(message);
                modal.appendChild(restartBtn);
                document.body.appendChild(modal);
            }
        } else {
            if (points > 0) {
                points--;
            }

            setTimeout(() => {
                firstCard.classList.remove("revealed");
                secondCard.classList.remove("revealed");
                firstCard.innerText = "";
                secondCard.innerText = "";
                firstCard = null;
                secondCard = null;
            }, 1500);
        }
        pointsElement.innerText = points;
    });
    return card;
};

const fragment = document.createDocumentFragment();

characters.forEach((character) => {
    const card = createCard(character);
    fragment.appendChild(card);
});

gameField.appendChild(fragment);

