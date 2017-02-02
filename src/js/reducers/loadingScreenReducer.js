export default function reducer(
    state={
		image: "/img/pokemon/" + getRandomPokemonId() + ".svg"
    },
    action
) {
    return state;
}

let getRandomPokemonId = () => {
    return Math.floor(Math.random() * (151 - 1) + 1);
}
