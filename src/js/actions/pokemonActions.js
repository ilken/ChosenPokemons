import { initFireBaseConfig } from '../firebase';
import Pokemon from '../helpers/Pokemon';

export function fetchPokemons () {
	return function (dispatch) {
		initFireBaseConfig();

		const db = firebase.database();
		const dbRef = db.ref().child('pokemon');

		dbRef.on('value', snapshot => {
			dispatch(updatePokemons(snapshot.val()));
		});
	};
}

export function updatePokemons (pokemons) {
	return (dispatch, getState) => {
		const { slider, map, switchList } = getState();
		let center = map.map ? { lat: map.map.center.lat(), lng: map.map.center.lng() } : map.center;
		let zoom = map.map ? map.map.getZoom() : map.zoom;

		let _pokemon = [];
		pokemons.forEach((p) => {
			_pokemon.push(new Pokemon(p));
		});
		dispatch({
			type: 'UPDATE_POKEMONS',
			payload: {
				pokemons: _pokemon,
				sliderValue: slider.value,
				center,
				zoom,
				activeType: switchList.activeType
			}
		});
	};
}
