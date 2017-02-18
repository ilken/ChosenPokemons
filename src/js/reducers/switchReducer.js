const defaultSwitchReducerState = {
	activeType: 'gen2',
	displayName: {
		gen1: 'Generation 1',
		gen2: 'Generation 2',
		rare: 'Rare'
	}
};

export default function reducer (state = defaultSwitchReducerState, action) {
	switch (action.type) {
		case 'SWITCH_POKEMON_LIST': {
			return { ...state, activeType: action.payload.activeType };
		}
	}

	return state;
}
