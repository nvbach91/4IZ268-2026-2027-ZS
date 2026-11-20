const pokemonForm = document.querySelector('#pokemon-form');
const pokemonsContainer = document.querySelector('#pokemons-container');
const removeAllButton = document.querySelector('#remove-all');
const errorContainer = document.querySelector('#error');
removeAllButton.addEventListener('click', () => {
    pokemonsContainer.innerHTML = '';
    existingPokemons.clear();
});

const createPokemonElement = (pokemonName, data) => {
    const pokemonElement = document.createElement('div');
    pokemonElement.classList.add('pokemon');
    pokemonElement.addEventListener('click', () => {
        pokemonElement.classList.add('highlighted');
    });
    const pokemonNameElement = document.createElement('div');
    pokemonNameElement.classList.add('pokemon-name');
    pokemonNameElement.textContent = pokemonName;
    const removeButton = document.createElement('button');
    removeButton.classList.add('pokemon-remove-button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        pokemonElement.remove();
        existingPokemons.delete(pokemonName);
    });
    const pokemonImage = document.createElement('img');
    pokemonImage.classList.add('pokemon-image');
    pokemonImage.src = `https://img.pokemondb.net/artwork/large/${pokemonName}.jpg`;
    pokemonImage.alt = pokemonName;
    pokemonImage.height = '100';
    const pokemonInfoElement = document.createElement('div');
    pokemonInfoElement.textContent = `Height: ${data.height}, weight: ${data.weight}`;

    pokemonElement.appendChild(pokemonNameElement);
    pokemonElement.appendChild(pokemonImage);
    pokemonElement.appendChild(removeButton);
    pokemonElement.appendChild(pokemonInfoElement);
    return pokemonElement;
};
const fetchPokemonData = async (pokemonName) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;
    const response = await fetch(url);
    if (!response.ok) {
        throw response;
    }
    const data = await response.json();
    const height = data.height;
    const weight = data.weight;
    return { height, weight };
};
const existingPokemons = new Set();
pokemonForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(pokemonForm);
    const pokemonNames = formData.get('pokemon-name').split(',');
    const spinner = document.createElement('div');
    spinner.classList.add('spinner');
    pokemonsContainer.append(spinner);
    for (const pokemonName of pokemonNames.map((name) => name.trim())) {
        // check pokemon name not blank
        if (pokemonName.trim() === '') {
            pokemonForm.reset();
            continue;
        }
        // check pokemon name existence
        if (existingPokemons.has(pokemonName)) {
            pokemonForm.reset();
            continue;
        }
        try {
            const data = await fetchPokemonData(pokemonName);
            const pokemonElement = createPokemonElement(pokemonName, data);
            pokemonsContainer.appendChild(pokemonElement);
            existingPokemons.add(pokemonName);
            errorContainer.textContent = '';
        } catch (err) {
            console.error(err);
            if (err.status === 404) {
                errorContainer.textContent = `${pokemonName} is not a valid pokemon name`;
            }
        }
    }
    pokemonForm.reset();
    spinner.remove();
});


// console.log('Start');
// const load = async () => {
//   console.log("B");
//   const response = await fetch('https://dummyjson.com/c/705a-50d9-4de3-abc5');
//   const data = await response.text();
//   console.log(data);
// };

// console.log("A");
// load();
// console.log("C");

// output: A B C "D"



