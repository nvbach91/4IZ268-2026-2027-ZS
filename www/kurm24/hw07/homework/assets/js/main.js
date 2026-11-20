/**
 * Memorama, Match Match, Match Up, Memory, Pelmanism, Shinkei-suijaku, Pexeso or simply Pairs
 */


(() => {
    const gameField = document.querySelector('#game-field');
    const pointsDisplay = document.querySelector('#points');

    let firstCard = null;
    let secondCard = null;
    let points = 0;

    let pokemons = ['Mewtwo', 'Lugia', 'Ho-Oh', 'Rayquaza', 'Kyogre', 'Groudon', 'Dialga', 'Palkia', 'Mew', 'Arceus'];
    pokemons = pokemons.concat(pokemons);
    pokemons.sort(() => 0.5 - Math.random());

    const showCard = (card) => {
        const pokemon = pokemons[card.dataset.index];

        const name = document.createElement('p');
        name.classList.add('pokemon-name');
        name.textContent = pokemon;

        const image = document.createElement('img');
        image.src = `https://img.pokemondb.net/artwork/large/${pokemon.toLowerCase()}.jpg`;
        image.alt = pokemon;
        image.classList.add('pokemon-image');

        card.append(name, image);
        card.classList.add('flipped');
    };

    const hideCard = (card) => {
        card.classList.remove('flipped');
        card.replaceChildren();
    };

    const rotateCard = (card) => {
        if (secondCard !== null) return;
        if (card === firstCard) return;
        if (card.classList.contains('matched')) return;

        showCard(card);

        if (firstCard === null) {
            firstCard = card;
            return;
        }

        secondCard = card;

        if (pokemons[firstCard.dataset.index] === pokemons[secondCard.dataset.index]) {
            points++;
            pointsDisplay.textContent = points;
            firstCard.classList.add('matched');
            secondCard.classList.add('matched');
            firstCard = null;
            secondCard = null;
            if (document.querySelectorAll('.matched').length === pokemons.length) {
                setTimeout(() => alert(`Konec hry! Celkem bodů: ${points}`), 300);
            }
        } else {
            points = Math.max(0, points - 1);
            pointsDisplay.textContent = points;
            setTimeout(() => {
                hideCard(firstCard);
                hideCard(secondCard);
                firstCard = null;
                secondCard = null;
            }, 1000);
        }
    };

    const createCard = (index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.index = index;
        card.addEventListener('click', () => rotateCard(card));
        return card;
    };

    const fragment = document.createDocumentFragment();
    for (let i = 0; i < pokemons.length; i++) {
        fragment.appendChild(createCard(i));
    }
    gameField.appendChild(fragment);
})();



