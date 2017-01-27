import React from 'react';
import Store from '../stores/Store';
import * as Actions from "../actions/Actions";
import {Gmaps} from 'react-gmaps';

export default class Markers extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			markers: []
		};
	}

	componentDidUpdate(prevProps){
		if(this.props !== prevProps){
			this.clearMarkers();
			this.createMarkers();
		}
	}

	createMarkers() {
		if(this.props.map){
			let _markers = [];
			for(let p of this.props.pokemons){
				let _marker = new google.maps.Marker({
					position: new google.maps.LatLng(p.lat, p.lon),
					icon: "/img/pokemon/" + p.id + ".svg"
				});
				_markers.push(_marker);

				_marker.addListener('click', this.openInfoWindow.bind(this, _marker, p));
				_marker.setMap(this.props.map);
			}

			this.setState({
				markers: _markers
			});
		}
	}

	clearMarkers() {
		for(let m of this.state.markers){
			m.setMap(null);
		}
	}

	openInfoWindow(marker, pokemon){
		Actions.openInfoWindow(marker, pokemon);
	}

	render () {
		return null;
	}
}
