import React from 'react';

export default class InfoWindow extends React.Component {
	componentDidUpdate (prevProps) {
		if (prevProps.infoWindow.marker) {
			this.closePrevInfoWindow(prevProps.infoWindow);
		}

		if (this.props.infoWindow.marker) {
			this.openInfoWindow();
		}
	}

	closePrevInfoWindow (infoWindow) {
		if (infoWindow.instance) {
			infoWindow.instance.close();
		}
	}

	openInfoWindow () {
		if (this.props.infoWindow.instance) {
			let pokemon = this.props.infoWindow.marker.pokemon;
			let content = this.buildInfoContent(pokemon);

			this.props.map.setCenter(this.props.infoWindow.marker.getPosition());
			this.props.infoWindow.instance.setContent(content);
			this.props.infoWindow.instance.open(this.props.map, this.props.infoWindow.marker);
		}
	}

	buildInfoContent (pokemon) {
		let despawn = new Date(pokemon.expires * 1000);
		let hours = despawn.getHours();
		let minutes = '0' + despawn.getMinutes();
		let seconds = '0' + despawn.getSeconds();
		let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
		let mapUrl = 'https://www.google.co.uk/maps/search/' + pokemon.lat + ',' + pokemon.lon;

		return '<div class="infoWindow text-center">' +
				'<span class="name">' + pokemon.name + ' ' + pokemon.iv + '%</span> <br>' +
				'<span class="stats">Atk:' + pokemon.attack + ' | Def:' + pokemon.defence + ' | Sta:' + pokemon.stamina + '</span> <br>' +
				'<span class="moves">Moves: ' + pokemon.firstMove + ' | ' + pokemon.secondMove + '</span> <br>' +
				'<span class="expires">Expires: ' + formattedTime + '</span> <br>' +
				'<a class="directions" href="' + mapUrl + '" target="_blank">Get Directions</span>' +
				'</div>';
	}

	render () {
		return null;
	}
}
