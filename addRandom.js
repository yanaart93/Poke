import { fillPokemonCard, getPokemonByNameOrId } from './const.js';

const btn = document.querySelector('#add');
const cardList = document.querySelector('.card-list')

btn.addEventListener('click', async (event) => {
    const randomId = Math.floor(Math.random() * 100);
    try {
        const pokemon = await getPokemonByNameOrId(randomId);
        fillPokemonCard(pokemon);
        const pokeList = JSON.stringify(cardList.innerHTML)
        localStorage.setItem('newPokes', JSON.parse(pokeList))  
    } catch (error) {
        alert(error.message);
    }

});

cardList.innerHTML = localStorage.getItem('newPokes')