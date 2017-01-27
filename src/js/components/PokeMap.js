import React from 'react';
import Store from '../stores/Store';
import {Gmaps} from 'react-gmaps';

export default class PokeMap extends React.Component {
	constructor(){
		super();
		this.API_KEY = 'AIzaSyB0LCSzHoRAkhCpheh4c_0BARgsjF9dr_s';
		this.map = null;
		this.markers = [];

		this.state = {
			zoom: 11,
			center: {lat: 51.5072749, lng: -0.1282788}
		};
	}

	componentWillMount () {
		Store.on('ViewOnMap', () => {
			this.updateMarkedPokemon();
		});
	}

	onMapCreated(map) {
		this.map = map;

		this.map.setOptions({
			disableDefaultUI: true,
			clickableIcons: false
		});

		this.createMarkers();
	}

	updateMarkedPokemon(){
		let _markedPokemon = Store.getPokemonToMark();

		this.map.setCenter({lat: _markedPokemon.lat, lng: _markedPokemon.lon});
		this.map.setZoom(15);
		window.scroll(0,0);
	}

	createMarkers() {
		if(this.map){
			this.clearMarkers();

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

	render () {
		this.createMarkers();

		return (
			<Gmaps
				width={'100%'}
				height={'400px'}
				lat={this.state.center.lat}
				lng={this.state.center.lng}
				zoom={this.state.zoom}
				loadingMessage={'Loading...'}
				params={{v: '3.exp', key: this.API_KEY}}
				onMapCreated={this.onMapCreated.bind(this)}>
			</Gmaps>
		);
	}
}
