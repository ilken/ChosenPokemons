import { getRandomPokemonId } from '../helpers/helper';

const defaultLoadingScreenReducerState = {
	image: '/img/pokemon/' + getRandomPokemonId() + '.svg'
};

export default function reducer (state = defaultLoadingScreenReducerState, action) {
	return state;
}
