export function filterPokemons (pokemons, ivLimit = 0, type) {
	let _filteredPokemons = pokemons.filter((p) => {
		let typeMatch = () => {
			if (type === 'rare') return p.isRare;
			else if (type === 'gen1') return p.generation === 1;
			else if (type === 'gen2') return p.generation === 2;
			return false;
		};

		let ivMatch = () => {
			return (type === 'rare') ? true : p.iv >= ivLimit;
		};

		return ivMatch() && typeMatch();
	});
	return _filteredPokemons.sort((a, b) => b.iv - a.iv);
}

export function filterPokemonsByType (pokemons, type) {
	let _filteredPokemons = pokemons.filter((p) => p.iv >= type);
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
