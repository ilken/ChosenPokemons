import React from 'react';
import Markers from './map/Markers';
import InfoWindow from './map/InfoWindow';
import { Gmaps } from 'react-gmaps';
import { mapCreated } from '../actions/mapActions';

export default class PokeMap extends React.Component {
	onMapCreated (map) {
		map.setOptions({
			disableDefaultUI: this.props.map.options.disableDefaultUI,
			clickableIcons: this.props.map.options.clickableIcons
		});

		this.props.dispatch(mapCreated(map));
	}

	render () {
		return (
			<div className="pokeMap">
				<Gmaps
					width={this.props.map.style.width}
					height={this.props.map.style.height}
					lat={this.props.map.center.lat}
					lng={this.props.map.center.lng}
					zoom={this.props.map.zoom}
					loadingMessage={this.props.map.loadingMessage}
					params={{ v: '3.exp', key: this.props.map.API_KEY }}
					onMapCreated={this.onMapCreated.bind(this)} />
				<Markers
					dispatch={this.props.dispatch}
					map={this.props.map.map}
					pokemons={this.props.pokemons}
					markers={this.props.map.markers} />
				<InfoWindow
					infoWindow={this.props.map.infoWindow}
					map={this.props.map.map} />
			</div>
		);
	}
}
