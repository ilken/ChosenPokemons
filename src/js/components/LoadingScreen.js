import React from 'react';

export default class LoadingScreen extends React.Component {
	render () {
		return (
			<div className="row loadingScreen">
				<img src={this.props.loadingScreen.image} className="img-responsive loadingImage" alt="Pokemon"/>
				<h2 className="text-center"> {'Who\'s That Pokemon?'} </h2>
			</div>
		);
	}
}
