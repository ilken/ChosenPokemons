import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class Store extends EventEmitter {
	constructor () {
		super();
		this.pokemons = [];
		this.filteredPokemons = [];
		this.ivLimit = 90;
		this.markedOnMap = null;
	}

	updateData (response) {
		this.pokemons = response;
		this.filteredPokemons = this.filterPokemons(response);
		this.emit('Update');
	}

	filterPokemons () {
		this.filteredPokemons = this.pokemons.filter((p) => p.iv >= this.ivLimit);
		return this.filteredPokemons.sort((a, b) => b.iv - a.iv);
	}

	getPokemons () {
		return this.filteredPokemons;
	}

	updateSlider (response) {
		this.ivLimit = response;
		this.filteredPokemons = this.filterPokemons();
		this.emit('Update');
	}

	getSliderValue (response) {
		return this.ivLimit;
	}

	viewOnMap (response) {
		this.markedOnMap = response;
		this.emit('ViewOnMap');
	}

	getPokemonToMark (response) {
		return this.markedOnMap;
	}

	handleActions (action) {
		switch (action.type) {
			case 'UPDATE_POKEMONS':{
				this.updateData(action.data);
				break;
			}
			case 'UPDATE_SLIDER':{
				this.updateSlider(action.data);
				break;
			}
			case 'VIEW_ON_MAP':{
				this.viewOnMap(action.data);
				break;
			}
		}
	}
}

const store = new Store();
dispatcher.register(store.handleActions.bind(store));

export default store;
