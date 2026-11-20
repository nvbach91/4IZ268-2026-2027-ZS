const pokemonForm = document.querySelector('#pokemon-form');
const pokemonsContainer = document.querySelector('#pokemons-container');
const removeAllButton = document.querySelector('#remove-all');
const errorContainer = document.querySelector('#error');

removeAllButton.addEventListener('click', () => {
    pokemonsContainer.innerHTML = '';
});

const fetchPokemonData = async (pokemonName) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const response = await fetch(url); // http GET method by default;
    if (!response.ok) {
        throw response;
    }
    const data = await response.json();
    return data;
};

const createPokemonElement = (pokemonName, data) => {
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
    pokemonInfoElement.classList.add('pokemon-info');
    pokemonInfoElement.textContent = `height: ${data.height}, weight: ${data.weight}`;
    pokemonElement.appendChild(pokemonNameElement);
    pokemonElement.appendChild(image);
    pokemonElement.appendChild(pokemonInfoElement);
    pokemonElement.appendChild(removeButton);

    return pokemonElement;
};

const existingPokemons = new Set();

pokemonForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(pokemonForm);
    const pokemonNames = formData.get('pokemon-name').split(/[,;]/).map((name) => {
        return name.trim();
    });

    const spinner = document.createElement('div');
    spinner.classList.add('spinner');
    pokemonsContainer.append(spinner);
    const pokemonElements = [];
    for (const pokemonName of pokemonNames) {
        if (pokemonName.trim() === '') {
            continue;
        }
        if (existingPokemons.has(pokemonName)) {
            continue;
        }
        try {
            const data = await fetchPokemonData(pokemonName);
            const pokemonElement = createPokemonElement(pokemonName, data);
            // do not modify the DOM inside a loop
            // pokemonsContainer.appendChild(pokemonElement);
            pokemonElements.push(pokemonElement);
            existingPokemons.add(pokemonName);
            errorContainer.textContent = '';
        } catch (err) {
            if (err.status === 404) {
                errorContainer.textContent = `${pokemonName} is not a valid pokemon name`;
            }
        }
    }
    pokemonsContainer.append(...pokemonElements);
    pokemonForm.reset();
    spinner.remove();
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





