export default function reducer(
    state={
        pokemons: [],
		filteredPokemons: [],
        fetching: true,
        error: null
    },
    action
) {
    switch (action.type) {
        case 'UPDATE_POKEMONS': {
            return {
                ...state,
                fetching: false,
                pokemons: action.payload,
                filteredPokemons: filterPokemons(action.payload, action.ivLimit)
            }
        }
        case 'UPDATE_SLIDER': {
            return {
                ...state,
                filteredPokemons: filterPokemons(state.pokemons, action.payload)
            }
        }
    }

    return state;
}

let filterPokemons = (pokemons, ivLimit) => {
	let _filteredPokemons = pokemons.filter((p) => p.iv >= ivLimit);
	return _filteredPokemons.sort((a, b) => b.iv - a.iv);
}
