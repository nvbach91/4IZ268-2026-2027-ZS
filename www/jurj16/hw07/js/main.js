/**
 * Memorama, Match Match, Match Up, Memory, Pelmanism, Shinkei-suijaku, Pexeso or simply Pairs
 */

let cities = ['Prague', 'Juba', 'Tijor', 'Mogiri', 'Lafon', 'Mundri', 'Nyiel', 'Jalle', 'Kolmarek', 'Kediba', 'Oraba', 'Aba', 'Pajok', 'Palabek', 'Yei', 'Akot', 'Kyegegwa', 'Mubende', 'Kampala', 'Luweero']
cities = cities.concat(cities);
cities.sort(() => {
  return 0.5 - Math.random();
});

const gf = document.querySelector('#game-field');
gf.style.setProperty('--max-card-width', `${cities.reduce((acc, str) => {
  return Math.max(acc, str.length);
}, 0)}em`);

cities.forEach(c => {
  const card = document.createElement('div');
  card.textContent = c;
  card.classList.add('card');
  gf.appendChild(card);
});
