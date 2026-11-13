const pokemonForm = document.querySelector('#pokemon-form');
const pokemonsContainer = document.querySelector('#pokemons-container');
const removeAllButton = document.querySelector('#remove-all');

removeAllButton.addEventListener('click', () => {
    pokemonsContainer.innerHTML = '';
});

const fetchPokemonData = async (pokemonName, pokemonInfoElement) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const response = await fetch(url);
    const data = await response.json();
    pokemonInfoElement.textContent = `Height: ${data.height}, weight: ${data.weight}`;
};

const createPokemonElement = (pokemonName) => {
    const pokemonElement = document.createElement('div');
    pokemonElement.classList.add('pokemon');

    const pokemonNameElement = document.createElement('div');
    pokemonNameElement.classList.add('pokemon-name');
    pokemonNameElement.textContent = pokemonName;

    pokemonElement.addEventListener('click', () => {
        pokemonElement.classList.add('highlighted');
    });

    const imageUrl = `https://img.pokemondb.net/artwork/${pokemonName}.jpg`;
    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = pokemonName;
    image.height = '100';
    image.classList.add('pokemon-image');


    const removeButton = document.createElement('button');
    removeButton.classList.add('pokemon-remove-button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        pokemonElement.remove();
        existingPokemons.delete(pokemonName);
    });

    const pokemonInfoElement = document.createElement('div');
    const spinner = document.createElement('div');
    spinner.classList.add('spinner');
    pokemonInfoElement.append(spinner);
    
    pokemonElement.appendChild(pokemonNameElement);
    pokemonElement.appendChild(image);
    pokemonElement.appendChild(pokemonInfoElement);
    pokemonElement.appendChild(removeButton);

    fetchPokemonData(pokemonName, pokemonInfoElement);

    return pokemonElement;
};

const existingPokemons = new Set();

pokemonForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(pokemonForm);
    const pokemonName = formData.get('pokemon-name');

    if (pokemonName.trim() === '') {
        return;
    }

    if (existingPokemons.has(pokemonName)) {
        return;
    }

    const pokemonElement = createPokemonElement(pokemonName);
    pokemonsContainer.appendChild(pokemonElement);
    existingPokemons.add(pokemonName);
    pokemonForm.reset();
});


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





