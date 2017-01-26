import React from 'react';

export default class LoadingScreen extends React.Component {
	constructor(){
		super();
		let randomPokemonId = Math.floor(Math.random() * (151 - 1) + 1);
		this.state = {
			loadingImage: "/img/pokemon/" + randomPokemonId + ".svg"
		};
	}
	render () {
		return (
			<div className="row loadingScreen">
				<img src={this.state.loadingImage} className="img-responsive loadingImage" alt="Pokemon"/>
				<h2 className="text-center"> {"Who's That Pokemon?"} </h2>
			</div>
		);
	}
}
