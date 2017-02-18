export function filterPokemons (pokemons, ivLimit = 0, type, currentLocation = null) {
	let _filteredPokemons = pokemons.filter((p) => {
		let inRange = () => {
			const threshold = 0.016;
			return p.lat > currentLocation.lat - threshold &&
				 p.lat < currentLocation.lat + threshold &&
				 p.lng > currentLocation.lng - threshold &&
				 p.lng < currentLocation.lng + threshold;
		};

		let typeMatch = () => {
			if (type === 'rare') return p.isRare;
			else if (type === 'gen1') return p.generation === 1;
			else if (type === 'gen2') return p.generation === 2;
			else if (type === 'nearMe') return inRange();
			return false;
		};

		let ivMatch = () => {
			return (type === 'rare' || type === 'nearMe') ? true : p.iv >= ivLimit;
		};

		return ivMatch() && typeMatch();
	});
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
	return Math.floor(Math.random() * (251 - 1) + 1);
}
