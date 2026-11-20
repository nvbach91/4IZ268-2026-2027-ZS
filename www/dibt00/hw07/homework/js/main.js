/**
 * Memorama, Match Match, Match Up, Memory, Pelmanism, Shinkei-suijaku, Pexeso or simply Pairs
 */
let cities = ['Prague', 'London', 'Paris', 'Rome', 'Berlin', 'Tokyo', 'Sydney', 'Madrid', 'Vienna', 'New York'];
cities = cities.concat(cities);
cities.sort(() => 0.5 - Math.random());

class Game {
  gameField;
  pointsElement;

  points;
  foundPairs;
  firstCard;
  secondCard;

  constructor() {
    this.points = 0;
    this.foundPairs = 0;
    this.firstCard = null;
    this.secondCard = null;

    this.gameField = document.querySelector('#game-field');
    this.pointsElement = document.querySelector('#points');
  }

  createCard = (city) => {
    const card = document.createElement('button');
    card.classList.add('card');
    card.innerText = '?';
    card.setAttribute('type', 'button');

    card.addEventListener('click', () => {
      if (this.secondCard !== null || card === this.firstCard || card.classList.contains('matched')) return;

      card.innerText = city;
      card.classList.add('revealed');

      if (this.firstCard === null) {
        this.firstCard = card;
        return;
      }

      this.secondCard = card;

      if (this.firstCard.innerText === this.secondCard.innerText) {
        this.points++;
        this.foundPairs++;
        this.firstCard.classList.add('matched');
        this.secondCard.classList.add('matched');
      } else {
        this.points = Math.max(0, this.points - 1);
      }
      this.pointsElement.innerText = this.points;

      if (this.foundPairs === cities.length / 2) {
        const finalMessage = document.createElement('p');
        finalMessage.classList.add('game-result');
        finalMessage.innerText = `All pairs found! Your score is ${this.points}.`;
        this.gameField.insertAdjacentElement('afterend', finalMessage);
      }

      setTimeout(() => {
        if (!this.firstCard.classList.contains('matched')) {
          this.firstCard.innerText = '?';
          this.secondCard.innerText = '?';
          this.firstCard.classList.remove('revealed');
          this.secondCard.classList.remove('revealed');
        }

        this.firstCard = null;
        this.secondCard = null;
      }, 2000);
    });

    return card;
  }

  start = () => cities.forEach((city) => this.gameField.appendChild(this.createCard(city)));
}

const game = new Game();
game.start();
