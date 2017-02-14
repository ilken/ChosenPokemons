export function filterPokemons (pokemons, ivLimit = 0) {
	let _filteredPokemons = pokemons.filter((p) => p.iv >= ivLimit);
	return _filteredPokemons.sort((a, b) => b.iv - a.iv);
}

export function getInfoWindowInstance (instance) {
	if (!instance) {
		instance = new google.maps.InfoWindow({
			content: '',
			disableAutoPan: true
		});
	}

	return instance;
}

export function getRandomPokemonId () {
	return Math.floor(Math.random() * (151 - 1) + 1);
}
