export function switchPokemonList (activeType) {
	return (dispatch, getState) => {
		const { slider, map } = getState();
		let center = map.map ? { lat: map.map.center.lat(), lng: map.map.center.lng() } : map.center;
		let zoom = map.map ? map.map.getZoom() : map.zoom;

		dispatch({
			type: 'SWITCH_POKEMON_LIST',
			payload: {
				activeType,
				center,
				zoom,
				sliderValue: slider.value
			}
		});
	};
}
