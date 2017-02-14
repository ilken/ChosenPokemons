import { filterPokemons } from '../helpers/helper';

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
				pokemons: action.payload.pokemons,
				rarePokemons: action.payload.rarePokemons,
				filteredPokemons: action.payload.filteredPokemons,
				mapPokemons: action.payload.filteredPokemons.concat(action.payload.rarePokemons)
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
