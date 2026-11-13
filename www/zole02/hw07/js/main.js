/**
 * Pexeso pro jednoho hráče.
 * Celá hra se staví pomocí JavaScriptu, do index.html se nesahá.
 */

// Seznam měst (10 měst = 20 karet, 5 sloupců x 4 řádky)
const cityNames = [
  "Prague",
  "London",
  "Paris",
  "Moscow",
  "Vancouver",
  "Sydney",
  "Tokyo",
  "Rome",
  "Cairo",
  "Lima",
];

// Doba, po kterou zůstanou dvě různé karty odhalené (v milisekundách)
const HIDE_DELAY = 2000;

// Prvky stránky, které už v HTML jsou
const gameField = document.querySelector("#game-field");
const pointsElement = document.querySelector("#points");

// Stav hry
let points = 0; // aktuální počet bodů
let firstCard = null; // první otočená karta v tahu
let secondCard = null; // druhá otočená karta v tahu
let matchedCount = 0; // kolik karet je už správně odhaleno
let totalCards = 0; // kolik karet je na ploše

// Zpráva na konci hry a tlačítko pro novou hru (vytvoří se až v JS)
const messageElement = document.createElement("p");
messageElement.classList.add("message");
const restartButton = document.createElement("button");
restartButton.classList.add("restart");
restartButton.innerText = "New game";
restartButton.addEventListener("click", () => {
  startGame();
});
document.body.appendChild(messageElement);
document.body.appendChild(restartButton);

// Zamíchání pole (návod ze zadání)
const shuffle = (array) => {
  return array.sort(() => 0.5 - Math.random());
};

// Vypíše body na stránku
const showPoints = () => {
  pointsElement.innerText = points;
};

// Odhalí kartu: název města se do karty vloží až teď
// (prevence podvádění: v DOM před otočením žádný název není)
const revealCard = (card) => {
  card.element.innerText = card.name;
  card.element.classList.add("revealed");
};

// Skryje kartu a název z DOM zase odstraní
const hideCard = (card) => {
  card.element.innerText = "";
  card.element.classList.remove("revealed");
};

// Konec tahu: vynulujeme obě otočené karty a hráč může táhnout znovu
const resetTurn = () => {
  firstCard = null;
  secondCard = null;
};

// Vyhodnocení dvou otočených karet
const checkPair = () => {
  if (firstCard.name === secondCard.name) {
    // shoda: +1 bod, karty zůstanou odhalené
    points++;
    matchedCount += 2;
    firstCard.element.classList.add("matched");
    secondCard.element.classList.add("matched");
    showPoints();
    resetTurn();
    if (matchedCount === totalCards) {
      messageElement.innerText = "Game over! Your total score: " + points;
      restartButton.classList.add("visible");
    }
  } else {
    // neshoda: -1 bod (ne pod nulu), po 2 s se karty vrátí zpět
    points = Math.max(0, points - 1);
    showPoints();
    setTimeout(() => {
      hideCard(firstCard);
      hideCard(secondCard);
      resetTurn();
    }, HIDE_DELAY);
  }
};

// Kliknutí na kartu
const onCardClick = (card) => {
  // během čekání jsou obě proměnné plné, další karty nejdou otočit
  if (firstCard !== null && secondCard !== null) {
    return;
  }
  // už odhalenou kartu nejde otočit znovu (ani kliknutím na tu samou dvakrát)
  if (card.element.classList.contains("revealed")) {
    return;
  }
  revealCard(card);
  if (firstCard === null) {
    firstCard = card;
  } else {
    secondCard = card;
    checkPair();
  }
};

// Vytvoří jednu kartu; objekt si pamatuje jméno města v JS, ne v HTML
const createCard = (name) => {
  const element = document.createElement("div");
  element.classList.add("card");
  const card = { name: name, element: element };
  element.addEventListener("click", () => {
    onCardClick(card);
  });
  return card;
};

// Nová hra: vynuluje stav a postaví plochu
const startGame = () => {
  points = 0;
  matchedCount = 0;
  resetTurn();
  showPoints();
  messageElement.innerText = "";
  restartButton.classList.remove("visible");
  gameField.innerHTML = "";

  // každé město dvakrát a zamíchat
  const names = shuffle(cityNames.concat(cityNames));
  totalCards = names.length;

  // karty se vloží najednou přes fragment, stránka se nepřekresluje v cyklu
  const fragment = document.createDocumentFragment();
  names.forEach((name) => {
    fragment.appendChild(createCard(name).element);
  });
  gameField.appendChild(fragment);
};

startGame();
