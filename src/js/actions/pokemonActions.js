import {initFireBaseConfig} from "../firebase";

export function fetchPokemons() {
    return function(dispatch) {
        initFireBaseConfig();

        const db = firebase.database();
        const dbRef = db.ref().child('pokemons');

        dbRef.on('value', snapshot => {
            dispatch(updatePokemons(snapshot.val()));
        });
    }
}

export function updatePokemons(payload) {
    return (dispatch, getState) => {
        const {slider, map} = getState();
        let center = map.map ? { lat: map.map.center.lat(), lng: map.map.center.lng() } : map.center;
        let zoom = map.map ? map.map.getZoom() : map.zoom;

        dispatch({
            type: 'UPDATE_POKEMONS',
            payload,
            ivLimit: slider.value,
            center,
            zoom
        });
    };
}
