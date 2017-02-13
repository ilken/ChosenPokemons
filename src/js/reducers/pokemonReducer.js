let filterPokemons = (pokemons, ivLimit) => {
	let _filteredPokemons = pokemons.filter((p) => p.iv >= ivLimit);
	return _filteredPokemons.sort((a, b) => b.iv - a.iv);
};

const defaultPokemonReducerState = {
	pokemons: [],
	rarePokemons: [],
	filteredPokemons: [],
	mapPokemons: [],
	fetching: true,
	error: null
};

export default function reducer (state = defaultPokemonReducerState, action) {
	switch (action.type) {
		case 'UPDATE_POKEMONS': {
			return {
				...state,
				fetching: false,
				pokemons: action.payload.pokemons.ivpokemons,
				rarePokemons: filterPokemons(action.payload.pokemons.rarepokemons, 0),
				filteredPokemons: filterPokemons(action.payload.pokemons.ivpokemons, action.payload.ivLimit),
				mapPokemons: filterPokemons(action.payload.pokemons.ivpokemons, action.payload.ivLimit).concat(action.payload.pokemons.rarepokemons)
			};
		}
		case 'UPDATE_SLIDER': {
			return {
				...state,
				filteredPokemons: filterPokemons(state.pokemons, action.payload.sliderValue),
				mapPokemons: filterPokemons(state.pokemons, action.payload.sliderValue).concat(state.rarePokemons)
			};
		}
	}

	return state;
}
