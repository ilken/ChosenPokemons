export function mapCreated(payload) {
    return (dispatch, getState) => {
        const {pokemon} = getState();

        dispatch({
            type: 'MAP_CREATED',
            payload,
            pokemons: pokemon.filteredPokemons
        });
    };
}

export function updateMarkers(payload) {
    return {
        type: 'UPDATE_MARKERS',
        payload,
    }
}

export function openInfoWindow(payload) {
    return {
        type: 'OPEN_INFO_WINDOW',
        payload,
    }
}

export function viewPokemonOnMap(payload) {
    window.scroll(0,0);
    return {
        type: 'VIEW_POKEMON_ON_MAP',
        payload,
    }
}
