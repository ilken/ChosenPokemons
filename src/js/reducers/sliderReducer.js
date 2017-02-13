const defaultSliderReducerState = {
	value: 95
};

export default function reducer (state = defaultSliderReducerState, action) {
	switch (action.type) {
		case 'UPDATE_SLIDER': {
			return { ...state, value: action.payload.sliderValue };
		}
	}

	return state;
}
