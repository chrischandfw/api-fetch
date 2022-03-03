export async function getPokedex() {
	let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
}
console.log(https://pokedex-alchemy.herokuapp.com/api/pokedex);

const resp = await fetch(https://pokedex-alchemy.herokuapp.com/api/pokedex);

const json = await resp.json();

return json.results;