import React from 'react';
import Pokemon from '../Pokemon';
import PokeMap from '../PokeMap';
import IVSlider from '../IVSlider';
import LoadingScreen from '../LoadingScreen';

import { fetchPokemons } from '../../actions/pokemonActions';
import { connect } from 'react-redux';

@connect((store) => {
	return {
		loading: store.pokemon.fetching,
		pokemons: store.pokemon.filteredPokemons,
		map: store.map,
		slider: store.slider,
		loadingScreen: store.loadingScreen
	};
})

export default class App extends React.Component {
	componentWillMount () {
		this.props.dispatch(fetchPokemons());
	}

	render () {
		if (this.props.loading) {
			return (<LoadingScreen loadingScreen={this.props.loadingScreen}/>);
		}
		else {
			const PokemonComponents = this.props.pokemons.map((pokemon) => {
				return <Pokemon key={pokemon.name + pokemon.lat + pokemon.lon} data={pokemon} dispatch={this.props.dispatch}/>;
			});

			return (
				<div className="container">
					<div className="row">
						<div className="col-md-12 col-sm-12 col-xs-12">
							<PokeMap
								dispatch={this.props.dispatch}
								pokemons={this.props.pokemons}
								map={this.props.map} />
						</div>
						<div className="col-md-12 col-sm-12 col-xs-12">
							<IVSlider
								dispatch={this.props.dispatch}
								slider={this.props.slider} />
						</div>
						<div className="col-md-12 col-sm-12 col-xs-12">
							{PokemonComponents}
						</div>
					</div>
				</div>
			);
		}
	}
}
