import React from 'react';
import Pokemon from './Pokemon';
import IVSlider from './IVSlider';
import LoadingScreen from './LoadingScreen';
import Store from '../stores/Store';
import * as Actions from "../actions/Actions";
import {initFireBaseConfig} from "../firebase";

export default class Pokemons extends React.Component {
	constructor () {
		super();
		this.state = {
			pokemons: [],
			sliderValue: 90,
			isLoading: true
		};
	}

	componentWillMount () {
		initFireBaseConfig();

		const db = firebase.database();
		const dbRef = db.ref().child('pokemons');

		dbRef.on('value', snapshot => {
			console.log(snapshot.val());
			Actions.updatePokemons(snapshot.val());
		});

		Store.on('Update', () => {
			this.setState({
				pokemons: Store.getPokemons(),
				sliderValue: Store.getSliderValue(),
				isLoading: false
			});
		});
	}

	render () {
		if (this.state.isLoading) {
			return (<LoadingScreen/>);
		}
		else {
			const PokemonComponents = this.state.pokemons.map((pokemon) => {
				return <Pokemon key={pokemon.name + pokemon.lat + pokemon.lon} data={pokemon}/>;
			});

			return (
				<div className="row">
					<div className="col-md-12 col-sm-12 col-xs-12">
						<IVSlider sliderValue={this.state.sliderValue}/>
					</div>
					<div className="col-md-12 col-sm-12 col-xs-12">
						{PokemonComponents}
					</div>
				</div>
			);
		}
	}
}
