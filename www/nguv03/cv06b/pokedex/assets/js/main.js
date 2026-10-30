const pokemonForm = document.querySelector('#pokemon-form');
const pokemonsContainer = document.querySelector('#pokemons-container');
const removeAllButton = document.querySelector('#remove-all');
removeAllButton.addEventListener('click', () => {
    pokemonsContainer.innerHTML = '';
});

pokemonForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(pokemonForm);
    const pokemonName = formData.get('pokemon-name');
    
    const pokemonElement = document.createElement('div');
    pokemonElement.textContent = pokemonName;
    pokemonElement.addEventListener('click', () => {
        pokemonElement.classList.add('highlighted');
    });
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        pokemonElement.remove();
    });
    pokemonElement.appendChild(removeButton);
    pokemonsContainer.appendChild(pokemonElement);
});