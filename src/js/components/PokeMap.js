import React from 'react';
import Store from '../stores/Store';
import {Gmaps} from 'react-gmaps';

export default class PokeMap extends React.Component {
	constructor(){
		super();
		this.API_KEY = 'AIzaSyB0LCSzHoRAkhCpheh4c_0BARgsjF9dr_s';
		this.map = null;
		this.markers = [];
		this.markedOnMap = null;
	}

	componentWillMount () {
		Store.on('ViewOnMap', () => {
			this.updateMarkedPokemon();
		});
	}

	onMapCreated(map) {
		this.map = map;

		this.map.setOptions({
			disableDefaultUI: true
		});

		this.createMarkers();
	}

	updateMarkedPokemon(){
		let _markedPokemon = Store.getPokemonToMark();
		this.clearMarkedPokemon();

		this.markedOnMap = new google.maps.Circle({
			strokeColor: '#FF0000',
			strokeOpacity: 0.8,
			strokeWeight: 2,
			fillColor: '#FF0000',
			fillOpacity: 0.35,
			map: this.map,
			center: {lat: _markedPokemon.lat, lng: _markedPokemon.lon},
			radius: 75
		});

		this.map.setCenter({lat: _markedPokemon.lat, lng: _markedPokemon.lon});
		this.map.setZoom(16);
	}

	createMarkers() {
		if(this.map){
			this.clearMarkers();
			this.clearMarkedPokemon();
			
			for(let p of this.props.pokemons){
				let _marker = new google.maps.Marker({
					position: new google.maps.LatLng(p.lat, p.lon),
					icon: "/img/pokemon/" + p.id + ".svg"
				});
				this.markers.push(_marker);

				_marker.addListener('click', () => {

				});
				_marker.setMap(this.map);
			}
		}
	}

	clearMarkers() {
		for(let m of this.markers){
			m.setMap(null);
		}

		this.markers = [];
	}

	clearMarkedPokemon() {
		if(this.markedOnMap){
			this.markedOnMap.setMap(null);
			this.markedOnMap = null;
		}
	}

	render () {
		this.createMarkers();

		return (
			<Gmaps
				width={'100%'}
				height={'600px'}
				lat={51.5072749}
				lng={-0.1282788}
				zoom={11}
				loadingMessage={'Loading...'}
				params={{v: '3.exp', key: this.API_KEY}}
				onMapCreated={this.onMapCreated.bind(this)}>
			</Gmaps>
		);
	}
}
