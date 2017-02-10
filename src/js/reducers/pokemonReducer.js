let filterPokemons = (pokemons, ivLimit) => {
	let _filteredPokemons = pokemons.filter((p) => p.iv >= ivLimit);
	return _filteredPokemons.sort((a, b) => b.iv - a.iv);
};

const defaultPokemonReducerState = {
	pokemons: [],
	filteredPokemons: [],
	fetching: true,
	error: null
};

export default function reducer (state = defaultPokemonReducerState, action) {
	switch (action.type) {
		case 'UPDATE_POKEMONS': {
			return {
				...state,
				fetching: false,
				pokemons: action.payload.pokemons,
				filteredPokemons: filterPokemons(action.payload.pokemons, action.payload.ivLimit)
			};
		}
		case 'UPDATE_SLIDER': {
			return {
				...state,
				filteredPokemons: filterPokemons(state.pokemons, action.payload.sliderValue)
			};
		}
	}

	return state;
}
