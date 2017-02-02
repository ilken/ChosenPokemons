import { combineReducers } from "redux";

import map from "./mapReducer";
import pokemon from "./pokemonReducer";
import slider from "./sliderReducer";
import loadingScreen from "./loadingScreenReducer";

export default combineReducers({
  map,
  pokemon,
  slider,
  loadingScreen
})
