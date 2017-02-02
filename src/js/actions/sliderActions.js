export function updateSliderValue(sliderValue) {
    return (dispatch, getState) => {
        const {map} = getState();
        let center = map.map ? { lat: map.map.center.lat(), lng: map.map.center.lng() } : map.center;
        let zoom = map.map ? map.map.getZoom() : map.zoom;

        dispatch({
            type: 'UPDATE_SLIDER',
            payload: {
                sliderValue,
                center,
                zoom
            }
        });
    };
}
