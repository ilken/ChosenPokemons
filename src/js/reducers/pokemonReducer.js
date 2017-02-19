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
				filteredPokemons: filterPokemons(action.payload.pokemons, action.payload.sliderValue, action.payload.activeType, action.payload.center)
			};
		}
		case 'UPDATE_SLIDER': {
			return {
				...state,
				filteredPokemons: filterPokemons(state.pokemons, action.payload.sliderValue, action.payload.activeType, action.payload.center)
			};
		}
		case 'SWITCH_POKEMON_LIST': {
			return {
				...state,
				filteredPokemons: filterPokemons(state.pokemons, action.payload.sliderValue, action.payload.activeType, action.payload.center)
			};
		}
	}

	return state;
}
