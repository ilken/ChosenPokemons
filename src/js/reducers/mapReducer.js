import { getInfoWindowInstance } from '../helpers/helper';

const defaultMapReducerState = {
	API_KEY: 'AIzaSyB0LCSzHoRAkhCpheh4c_0BARgsjF9dr_s',
	map: null,
	zoom: 11,
	center: {
		lat: 51.5072749,
		lng: -0.1282788
	},
	style: {
		width: '100%',
		height: '400px'
	},
	options: {
		disableDefaultUI: true,
		clickableIcons: false,
		maxZoom: 18,
		minZoom: 10,
		keyboardShortcuts: true,
		gestureHandling: 'greedy'
	},
	loadingMessage: 'Loading...',
	markers: [],
	infoWindow: {
		marker: null,
		instance: null
	}
};

export default function reducer (state = defaultMapReducerState, action) {
	switch (action.type) {
		case 'MAP_CREATED': {
			return {
				...state,
				map: action.payload.map
			};
		}
		case 'UPDATE_MARKERS': {
			return {
				...state,
				markers: action.payload.markers,
				infoWindow: {
					marker: null,
					instance: state.infoWindow.state
				}
			};
		}
		case 'VIEW_POKEMON_ON_MAP': {
			return {
				...state,
				center: {
					lat: action.payload.pokemon.lat,
					lng: action.payload.pokemon.lng
				},
				zoom: state.map.getZoom(),
				infoWindow: {
					marker: null,
					instance: getInfoWindowInstance(state.infoWindow.instance)
				}
			};
		}
		case 'OPEN_INFO_WINDOW': {
			return {
				...state,
				center: {
					lat: action.payload.marker.pokemon.lat,
					lng: action.payload.marker.pokemon.lng
				},
				zoom: state.map.getZoom(),
				infoWindow: {
					marker: action.payload.marker,
					instance: getInfoWindowInstance(state.infoWindow.instance)
				}
			};
		}
		case 'UPDATE_POKEMONS': {
			return {
				...state,
				center: action.payload.center,
				zoom: action.payload.zoom,
				infoWindow: {
					marker: null,
					instance: state.infoWindow.instance
				}
			};
		}
		case 'UPDATE_SLIDER': {
			return {
				...state,
				center: action.payload.center,
				zoom: action.payload.zoom
			};
		}
		case 'SWITCH_POKEMON_LIST': {
			return {
				...state,
				center: action.payload.center,
				zoom: action.payload.zoom
			};
		}
	}

	return state;
}
