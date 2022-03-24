import { fillPokemonCard, getPokemonByNameOrId } from './const.js';

const btn = document.querySelector('#boll');
const cardList = document.querySelector('.card-list');
btn.addEventListener('click', async (event) => {
    const randomId = Math.floor(Math.random() * 100);
    try {
        const pokemon = await getPokemonByNameOrId(randomId);
        fillPokemonCard(pokemon);
        localStorage.setItem('pokemon',JSON.parse(JSON.stringify(cardList.innerHTML)));
        
    }
    catch (error) {
        alert(error.message);
    }

});

cardList.innerHTML = localStorage.getItem('pokemon');

