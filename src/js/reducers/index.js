import { combineReducers } from 'redux';

import map from './mapReducer';
import pokemon from './pokemonReducer';
import slider from './sliderReducer';
import switchList from './switchReducer';
import loadingScreen from './loadingScreenReducer';

export default combineReducers({
	map,
	pokemon,
	slider,
	switchList,
	loadingScreen
});
