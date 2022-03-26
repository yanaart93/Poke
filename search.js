import { fillPokemonCard, getPokemonByNameOrId } from './const.js';
import { Pokemon } from './classes.js';
const form = document.querySelector('.search');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const {
        pokemonName: { value },
    } = event.target;


    if (!value) {
        alert('Введите имя покемона плиииз');
    } else {
        try {
            const pokemon = await getPokemonByNameOrId(value.toLowerCase());
            fillPokemonCard(pokemon);
        } catch (error) {
            alert(error.message);
        }
    }
});