import React from 'react';

export default class LoadingScreen extends React.Component {
	constructor(){
		super();
		this.state = {
			loadingImage: ''
		};
	}
	render () {
		return (
			<div className="row loadingScreen">
				<img src={this.state.loadingImage} className="img-responsive loadingImage" alt="Pokemon"/>
				<h2 className="text-center"> Loading... </h2>
			</div>
		);
	}
}
