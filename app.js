import { getPokedex } from "./fetch-api";

// import functions
const template = document.querySelector('template');
const selectEl = document.querySelector('select');
const errorElement = document.querySelector('#error-message');
//console.log(template, selectedEl)

// grab DOM elements
async function loadPokedex() {
	const pokedex = await getPokedex();
	list.classList.add('pokemon');

	for (let pokemon of pokedex) {
		const clone = template.content.cloneNode(true);
		const name = clone.querySelector('h2');
		const image = clone.querySelector('img');
		const type = clone.querySelector('h6');

		name.textContent ='Name: ' + pokemon.pokemon;

		type.textContent ='Egg: ' + pokemon.egg_group_1;
		image.src = pokemon.url_image;
		image.alt = pokemon.pokedex;

		list.appendChild(clone);
	}
}
//console.log(pokemon, name, image)

// set event listeners 
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
