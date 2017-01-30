import React from 'react';
import Markers from './Markers';
import InfoWindow from './InfoWindow';
import Store from '../stores/Store';
import {Gmaps} from 'react-gmaps';

export default class PokeMap extends React.Component {
	constructor(){
		super();
		this.API_KEY = 'AIzaSyB0LCSzHoRAkhCpheh4c_0BARgsjF9dr_s';

		this.state = {
			map: null,
			zoom: 11,
			center: {lat: 51.5072749, lng: -0.1282788}
		};
	}

	componentWillMount () {
		Store.on('ViewOnMap', () => {
			this.chageViewOnMap();
		});
		Store.on('InfoWindowUpdate', () => {
			this.updateMapData();
			this.openInfoWindow();
		});
	}

	componentWillReceiveProps(nextProps) {
		if (this.props !== nextProps){
			this.updateMapData();
		}
	}

	updateMapData(){
		if (this.state.map) {
			this.setState({
				zoom: this.state.map.getZoom(),
				center: {
					lat: this.state.map.getCenter().lat(),
					lng: this.state.map.getCenter().lng()
				}
			});
		}
	}

	onMapCreated(map) {
		map.setOptions({
			disableDefaultUI: true,
			clickableIcons: false
		});

		this.setState({
			map: map
		});
	}

	chageViewOnMap(){
		let _markedPokemon = Store.getPokemonToMark();

		this.state.map.setCenter({lat: _markedPokemon.lat, lng: _markedPokemon.lon});
		window.scroll(0,0);
	}

	openInfoWindow(){
		this.setState({
			infoWindowData: Store.getInfoWindowData()
		});
	}

	render () {
		return (
			<div className="pokeMap">
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
				<Markers
					pokemons={this.props.pokemons}
					map={this.state.map}>
				</Markers>
				<InfoWindow
					infoWindowData={this.state.infoWindowData}
					map={this.state.map}>
				</InfoWindow>
			</div>
		);
	}
}
