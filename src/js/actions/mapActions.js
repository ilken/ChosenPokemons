export function mapCreated (map) {
	return (dispatch, getState) => {
		const { pokemon } = getState();

		dispatch({
			type: 'MAP_CREATED',
			payload: {
				map,
				pokemons: pokemon.filteredPokemons
			}
		});
	};
}

export function updateMarkers (markers) {
	return {
		type: 'UPDATE_MARKERS',
		payload: {
			markers
		}
	};
}

export function openInfoWindow (marker) {
	return {
		type: 'OPEN_INFO_WINDOW',
		payload: {
			marker
		}
	};
}

export function viewPokemonOnMap (pokemon) {
	window.scroll(0, 0);
	return {
		type: 'VIEW_POKEMON_ON_MAP',
		payload: {
			pokemon
		}
	};
}
