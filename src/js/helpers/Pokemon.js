import pokemonData from '../../data/pokemonData';
import moveData from '../../data/moveData';

const GEN1_LIMIT = 151;

export default class Pokemon {
	constructor (p) {
		this.id = parseInt(p.id, 10);
		this.name = pokemonData[p.id].name;
		this.attack = p.attack;
		this.defence = p.defence;
		this.stamina = p.stamina;
		this.expires = p.expires;
		this.iv = this.calculateIV();
		this.firstMove = moveData[p.firstMove] || '';
		this.secondMove = moveData[p.secondMove] || '';
		this.lat = p.lat;
		this.lng = p.lng;
		this.isRare = pokemonData[p.id].rare;
		this.generation = this.calculateGeneration();
	}

	calculateGeneration () {
		if (this.id <= GEN1_LIMIT) {
			return 1;
		}
		return 2;
	}

	calculateIV () {
		return Math.floor((this.attack + this.defence + this.stamina) / 45 * 100);
	}
}
