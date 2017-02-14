import { initFireBaseConfig } from '../firebase';
import { filterPokemons } from '../helpers/helper';

export function fetchPokemons () {
	return function (dispatch) {
		initFireBaseConfig();

		const db = firebase.database();
		const dbRef = db.ref().child('pokemons');

		dbRef.on('value', snapshot => {
			dispatch(updatePokemons(snapshot.val()));
		});
	};
}

export function updatePokemons (pokemons) {
	return (dispatch, getState) => {
		const { slider, map } = getState();
		let center = map.map ? { lat: map.map.center.lat(), lng: map.map.center.lng() } : map.center;
		let zoom = map.map ? map.map.getZoom() : map.zoom;
		let filteredPokemons = filterPokemons(pokemons.ivpokemons, slider.value);
		let rarePokemons = filterPokemons(pokemons.rarepokemons);

		dispatch({
			type: 'UPDATE_POKEMONS',
			payload: {
				pokemons: pokemons.ivpokemons,
				filteredPokemons,
				rarePokemons,
				center,
				zoom
			}
		});
	};
}
