export async function getPokedex() {
	let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

	const resp = await fetch(url);

	const json = await resp.json();

	return json.results;
}
//console.log(url + 'fightingType');

export async function getStarwars() {
	let url = 'https://swapi.dev/api/people';

	const resp = await fetch(url);

	const json = await resp.json();

	return json.results;
}