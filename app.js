import { getPokedex } from "./fetch-api";

// import functions
const template = document.querySelector('template');
const selectEl = document.querySelector('select');
const errorElement = document.querySelector('#error-message');
//console.log(template, selectedEl)

// grab DOM elements
async function loadPokedex() {
	const pokedex = await getPokedex();
	//console.log(pokedex)
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
selectEl.addEventListener('change', async (e) => {
	const selected = e.target.value;

	if (selected === 'none') {
		list.innerHTML = '';
		errorElement.innerHTML ='';
		const p = document.createElement('p');
		p.textContent = 'PLEASE SELECT AN API';
		errorElement.appendChild(p);
	} else if (selected === 'pokemon') {
		list.innerHTML ='';
		await loadPokedex();
	} else if (selected === 'star-wars') {
		list.innerHTML = '';
		await loadStarWars();
	}
}

    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
