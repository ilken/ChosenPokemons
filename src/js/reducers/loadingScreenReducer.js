let getRandomPokemonId = () => {
	return Math.floor(Math.random() * (151 - 1) + 1);
};

const defaultLoadingScreenReducerState = {
	image: '/img/pokemon/' + getRandomPokemonId() + '.svg'
};

export default function reducer (state = defaultLoadingScreenReducerState, action) {
	return state;
}
