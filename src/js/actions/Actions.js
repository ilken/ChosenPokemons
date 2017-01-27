import dispatcher from '../dispatcher';

export function updatePokemons (data) {
	dispatcher.dispatch({
		type: 'UPDATE_POKEMONS',
		data
	});
}

export function updateSlider (data) {
	dispatcher.dispatch({
		type: 'UPDATE_SLIDER',
		data
	});
}

export function viewOnMap (data) {
	dispatcher.dispatch({
		type: 'VIEW_ON_MAP',
		data
	});
}

export function openInfoWindow (marker, pokemon) {
	dispatcher.dispatch({
		type: 'OPEN_INFO_WINDOW',
		marker,
		pokemon
	});
}
