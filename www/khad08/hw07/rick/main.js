        // Rick and Morty Characters Data with placeholder image URLs (10 pairs -> 20 cards)
        const rickAndMortyCharacters = [
            { name: 'Rick Sanchez', img: 'images/rick.jpg' },
            { name: 'Morty Smith', img: 'images/morty.jpg' },
            { name: 'Pickle Rick', img: 'images/pickle.png' },
            { name: 'Summer Smith', img: 'images/summer.jpg' },
            { name: 'Beth Smith', img: 'images/beth.jpg' },
            { name: 'Jerry Smith', img: 'images/jerry.jpg' },
            { name: 'Mr. Meeseeks', img: 'images/meeseeks.jpg' },
            { name: 'Birdperson', img: 'images/birdperson.png' },
            { name: 'Squanchy', img: 'images/squanchy.jpeg' },
            { name: 'Evil Morty', img: 'images/evil.jpg' }
        ];

        
        let score = 0;
        let moves = 0;
        let firstCard = null;
        let secondCard = null;
        let isProcessing = false;
        let matchedPairs = 0;

        
        const boardElement = document.getElementById('game-board');
        const scoreDisplay = document.getElementById('score-display');
        const movesDisplay = document.getElementById('moves-display');
        const winModal = document.getElementById('win-modal');
        const finalScoreDisplay = document.getElementById('final-score');
        const modalRestartBtn = document.getElementById('modal-restart-btn');

       
        function initGame() {
           
            score = 0;
            moves = 0;
            matchedPairs = 0;
            firstCard = null;
            secondCard = null;
            isProcessing = false;

            scoreDisplay.textContent = score;
            movesDisplay.textContent = moves;
            winModal.classList.remove('show');
            boardElement.innerHTML = '';

           
            let cardDeck = rickAndMortyCharacters.concat(rickAndMortyCharacters);

           
            cardDeck.sort(() => 0.5 - Math.random());

            
            const fragment = document.createDocumentFragment();

            cardDeck.forEach((charData, index) => {
                const card = document.createElement('button');
                card.classList.add('card');
                card.dataset.name = charData.name;
                card.setAttribute('aria-label', `Karta ${index + 1}`);

                const cardInner = document.createElement('div');
                cardInner.classList.add('card-inner');

                const cardBack = document.createElement('div');
                cardBack.classList.add('card-back');
                cardBack.innerHTML = '🌀';

                const cardFront = document.createElement('div');
                cardFront.classList.add('card-front');

                const imgElem = document.createElement('img');
                imgElem.classList.add('card-image');
                imgElem.src = charData.img;
                imgElem.alt = charData.name;
                imgElem.loading = 'lazy';

                const nameDiv = document.createElement('div');
                nameDiv.classList.add('card-name');
                nameDiv.textContent = charData.name;

                cardFront.appendChild(imgElem);
                cardFront.appendChild(nameDiv);

                cardInner.appendChild(cardBack);
                cardInner.appendChild(cardFront);
                card.appendChild(cardInner);

                
                card.addEventListener('click', () => handleCardClick(card));

                fragment.appendChild(card);
            });

            boardElement.appendChild(fragment);
        }

       
        function handleCardClick(card) {
           
            if (isProcessing) return;
            if (card.classList.contains('flipped') || card.classList.contains('matched')) return;
            if (firstCard === card) return;

     
            card.classList.add('flipped');

            if (!firstCard) {
               
                firstCard = card;
            } else {
               
                secondCard = card;
                moves++;
                movesDisplay.textContent = moves;
                isProcessing = true; 

                const firstName = firstCard.dataset.name;
                const secondName = secondCard.dataset.name;

                if (firstName === secondName) {
                   
                    score += 1;
                    scoreDisplay.textContent = score;
                    matchedPairs++;

                    firstCard.classList.add('matched');
                    secondCard.classList.add('matched');

                    resetTurnState();

                   
                    if (matchedPairs === rickAndMortyCharacters.length) {
                        setTimeout(() => {
                            finalScoreDisplay.textContent = score;
                            winModal.classList.add('show');
                        }, 500);
                    }
                } else {
                   
                    score = Math.max(0, score - 1);
                    scoreDisplay.textContent = score;

                
                    setTimeout(() => {
                        firstCard.classList.remove('flipped');
                        secondCard.classList.remove('flipped');
                        resetTurnState();
                    }, 2000);
                }
            }
        }

       
        function resetTurnState() {
            firstCard = null;
            secondCard = null;
            isProcessing = false;
        }

        
        modalRestartBtn.addEventListener('click', initGame);

       
        window.onload = function() {
            initGame();
        };