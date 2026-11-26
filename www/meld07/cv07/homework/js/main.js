(() => {
    const states = ['California', 'Texas', 'Florida', 'New York', 'Pennsylvania',
        'Illinois', 'Ohio', 'Georgia', 'North Carolina', 'Michigan'];

    const field = document.querySelector('#game-field');
    const pointsEl = document.querySelector('#points');

    let cards = states.concat(states);
    cards.sort(() => 0.5 - Math.random());

    let points = 0;
    let first = null;
    let second = null;
    let matched = 0;

    const createCard = (name) => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.addEventListener('click', () => {
            if (second || card === first || card.classList.contains('flipped')) return;

            card.classList.add('flipped');
            card.innerText = name;

            if (!first) {
                first = card;
                return;
            }
            second = card;

            if (first.innerText === second.innerText) {
                first.classList.add('matched');
                second.classList.add('matched');
                points++;
                matched += 2;
                first = second = null;
            } else {
                points = Math.max(0, points - 1);
                setTimeout(() => {
                    [first, second].forEach((c) => {
                        c.classList.remove('flipped');
                        c.innerText = '';
                    });
                    first = second = null;
                }, 2000);
            }

            pointsEl.innerText = points;
            if (matched === cards.length) {
                document.querySelector('h2').innerText = `Game over! Total points: ${points}`;
            }
        });

        return card;
    };

    const fragment = document.createDocumentFragment();
    cards.forEach((name) => fragment.appendChild(createCard(name)));
    field.appendChild(fragment);
})();
