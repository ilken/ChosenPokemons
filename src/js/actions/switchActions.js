export function switchPokemonList (activeType) {
	return (dispatch, getState) => {
		const { slider, map } = getState();

		if (activeType === 'nearMe') {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition((position) => {
					let center = {
		              lat: position.coords.latitude,
		              lng: position.coords.longitude
		            };
					let zoom = 14;

					dispatch({
						type: 'SWITCH_POKEMON_LIST',
						payload: {
							activeType,
							center,
							zoom,
							sliderValue: slider.value
						}
					});
				},
				() => {
					alert('Location Error!');
				}
			);
			}
			else {
				alert('Browser doesn\'t support GeoLocation!');
			}
		}
		else {
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
		}
	};
}
