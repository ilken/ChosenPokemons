import React from 'react';
import {
	openInfoWindow,
	updateMarkers
} from "../../actions/mapActions";

export default class Markers extends React.Component {
	componentDidUpdate(prevProps){
		if(this.props.map && !prevProps.map || this.props.pokemons !== prevProps.pokemons){
			this.updateMarkers();
		}
	}

	updateMarkers() {
	    if(this.props.markers.length > 0){
	        this.clearMarkers();
	    }

	    this.createMarkers();
	}

	createMarkers() {
	    let _markers = [];

	    if (this.props.map) {
	        for(let p of this.props.pokemons){
	            let _marker = new google.maps.Marker({
	                position: new google.maps.LatLng(p.lat, p.lon),
	                icon: "/img/pokemon/" + p.id + ".svg"
	            });
	            _marker.pokemon = p;

				_marker.addListener('click', this.openInfoWindow.bind(this, _marker));
				_marker.setMap(this.props.map);

	            _markers.push(_marker);
	        }
	    }

		this.props.dispatch(updateMarkers(_markers));
	}

	clearMarkers(markers) {
	    for (let m of this.props.markers) {
	        m.setMap(null);
	    }
	}

	openInfoWindow(marker){
		this.props.dispatch(openInfoWindow(marker));
	}

	render () {
		return null;
	}
}
