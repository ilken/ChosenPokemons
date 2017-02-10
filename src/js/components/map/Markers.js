import React from 'react';
import {
	openInfoWindow,
	updateMarkers
} from '../../actions/mapActions';

export default class Markers extends React.Component {
	componentDidUpdate (prevProps) {
		if (this.props.map && !prevProps.map || this.props.pokemons !== prevProps.pokemons) {
			this.updateMarkers();
		}
	}

	updateMarkers () {
	    let markers = this.clearExpiredMarkers(this.props.markers);

		for (let p of this.props.pokemons) {
	        if (!this.markerExist(p)) {
	            this.addMarker(markers, p);
	        }
		}

		this.props.dispatch(updateMarkers(markers));
	}

	addMarker (markers, pokemon) {
		let marker = new google.maps.Marker({
			position: new google.maps.LatLng(pokemon.lat, pokemon.lon),
			icon: '/img/pokemon/' + pokemon.id + '.svg'
		});
		marker.pokemon = pokemon;

		marker.addListener('click', this.openInfoWindow.bind(this, marker));
		marker.setMap(this.props.map);
		markers.push(marker);
	}

	removeMarker (marker) {
		marker.setMap(null);
	}

	clearExpiredMarkers (markers) {
		let activeMarkers = [];

		for (let marker of markers) {
			if (this.markerActive(marker)) {
				activeMarkers.push(marker);
			}
			else {
				this.removeMarker(marker);
			}
		}

		return activeMarkers;
	}

	markerExist (pokemon) {
		return this.props.markers.find((marker) => marker.pokemon === pokemon);
	}

	markerActive (marker) {
		return this.props.pokemons.find((pokemon) => marker.pokemon === pokemon);
	}

	openInfoWindow (marker) {
		this.props.dispatch(openInfoWindow(marker));
	}

	render () {
		return null;
	}
}
