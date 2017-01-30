import React from 'react';
import Store from '../stores/Store';
import Actions from '../actions/Actions';

export default class InfoWindow extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			infoWindow: null
		};
	}

	componentDidUpdate(prevProps){
		this.createInfoWindow();
		if(this.props.infoWindowData !== prevProps.infoWindowData){
			this.closePrevInfoWindow();
			this.openInfoWindow();
		}
	}

	createInfoWindow(){
		if(!this.state.infoWindow){
			this.setState({
				infoWindow: new google.maps.InfoWindow({
					content: '',
					disableAutoPan: true
				})
			});
		}
	}

	closePrevInfoWindow(){
		if(this.state.infoWindow){
			this.state.infoWindow.close();
		}
	}

	openInfoWindow(){
		if(this.props.infoWindowData){
			let pokemon = this.props.infoWindowData.pokemon;
			let content = this.buildInfoContent(pokemon);

			this.props.map.setCenter(this.props.infoWindowData.marker.getPosition());
			this.state.infoWindow.setContent(content);
			this.state.infoWindow.open(this.props.map, this.props.infoWindowData.marker);
		}
	}

	buildInfoContent(pokemon){
		let despawn = new Date(pokemon.expires * 1000);
		let hours = despawn.getHours();
		let minutes = "0" + despawn.getMinutes();
		let seconds = "0" + despawn.getSeconds();
		let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

		return '<div class="infoWindow text-center">'
				+ '<span class="name">' + pokemon.name + ' ' + pokemon.iv +'%</span> <br>'
				+ '<span class="stats">Atk:' + pokemon.attack + ' | Def:' + pokemon.defence + ' | Sta:' + pokemon.stamina + '</span> <br>'
				+ '<span class="expires">Expires: ' + formattedTime + '</span> <br>'
				+ '</div>';
	}

	render () {
		return null;
	}
}
