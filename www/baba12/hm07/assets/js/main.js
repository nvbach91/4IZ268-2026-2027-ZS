/**
 * Memorama, Match Match, Match Up, Memory, Pelmanism, Shinkei-suijaku, Pexeso or simply Pairs
 */

(() => {
    const fieldElement = document.querySelector('#game-field');
    const scoreElement = document.querySelector('#points');

    let deck = [];
    let activeFirst = null;
    let activeSecond = null;
    let score = 0;
    let solvedCount = 0;

    const popularNames = [
        'Mickey Mouse',
        'Minnie Mouse',
        'Stitch',
        'Simba',
        'Pumbaa',
        'Timon',
        'Winnie the Pooh',
        'Bambi',
        'Scrooge McDuck',
        'Piglet',


    ];

    const refreshScore = (change) => {
        score = Math.max(0, score + change);
        scoreElement.innerText = score;
    };

    const revealCard = (cardNode, character) => {
        cardNode.classList.add('is-open');

        const picture = document.createElement('img');
        picture.src = character.imageUrl;
        picture.alt = character.name;
        picture.classList.add('character-img');

        const title = document.createElement('p');
        title.innerText = character.name;
        title.classList.add('character-label');

        cardNode.append(picture, title);
    };

    const concealCard = (cardNode) => {
        cardNode.classList.remove('is-open');
        cardNode.innerHTML = '';
    };

    const onCardSelect = (cardNode, character) => {
        if (activeSecond !== null) return;
        if (activeFirst && cardNode === activeFirst.node) return;
        if (cardNode.classList.contains('matched')) return;

        revealCard(cardNode, character);

        if (activeFirst === null) {
            activeFirst = { node: cardNode, data: character };
            return;
        }

        activeSecond = { node: cardNode, data: character };

        if (activeFirst.data.name === activeSecond.data.name) {
            activeFirst.node.classList.add('matched');
            activeSecond.node.classList.add('matched');
            solvedCount += 2;
            refreshScore(1);

            activeFirst = null;
            activeSecond = null;

            if (solvedCount === deck.length) {
                setTimeout(() => {
                    alert(`Konec hry! Celkový počet bodů: ${score}`);
                }, 400);
            }
        } else {
            refreshScore(-1);
            setTimeout(() => {
                concealCard(activeFirst.node);
                concealCard(activeSecond.node);
                activeFirst = null;
                activeSecond = null;
            }, 700);
        }
    };

    const buildCardElement = (character) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.addEventListener('click', () => onCardSelect(card, character));
        return card;
    };


    const fetchCharacterByName = (name) => {
        return fetch(`https://api.disneyapi.dev/character?name=${encodeURIComponent(name)}`)
            .then((res) => res.json())
            .then((result) => {
                const list = Array.isArray(result.data) ? result.data : [result.data];

                const match = list.find(
                    (item) => item && item.imageUrl && item.name.toLowerCase() === name.toLowerCase()
                ) || list.find((item) => item && item.imageUrl);

                return match ? { name: name, imageUrl: match.imageUrl } : null;
            });
    };


    Promise.all(popularNames.map(fetchCharacterByName))
        .then((characters) => {
            const validCharacters = characters.filter(Boolean);

            deck = validCharacters.concat(validCharacters);
            deck.sort(() => 0.5 - Math.random());

            const batch = document.createDocumentFragment();
            deck.forEach((character) => {
                batch.appendChild(buildCardElement(character));
            });
            fieldElement.appendChild(batch);
        })
        .catch((err) => {
            console.error('Chyba při načítání dat z API:', err);
        });
})();