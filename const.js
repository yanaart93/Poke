import { Pokemon } from './classes.js';
const card = document.querySelector('.card');
const cardList = document.querySelector('.card-list');
export const fillPokemonCard = (pokemon) => {

    const cloneCard = card.cloneNode(true);
    const title = cloneCard.querySelector('h3');
    const image = cloneCard.querySelector('img');
    const propertiesText = cloneCard.querySelector('.properties p');

    const [description] = cloneCard.getElementsByClassName('description');
    title.innerText = pokemon.name;
    image.src = pokemon.image;
    propertiesText.innerText = `Experience ${pokemon.experience}`;
    description.innerHTML = `
        <h4> Abilities: </h4>
        <ul>
        ${pokemon.abilities.map((el) => `<li>${el}</li>`).join('')}
        </ul>
    `;
    cardList.append(cloneCard);
};

export const getPokemonByNameOrId = async (params) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params}`);
        const result = await response.json();
        const {
            name,
            base_experience: experience,
            
            abilities: rawAbilities,
            sprites: { front_default: image },
            
        } = result;
        const serailizedAbilities = rawAbilities.map((el) => {
            const {
                ability: { name },
            } = el;
            return name;
        });
        const pokemon = new Pokemon(name, serailizedAbilities, experience, image);
        return pokemon;
    } catch (error) {
        throw Error('Покемон не найден')
    }
};
