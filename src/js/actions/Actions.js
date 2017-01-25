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
