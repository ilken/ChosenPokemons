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
					content: ''
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
		this.props.map.setCenter(this.props.infoWindowData.marker.getPosition());
		this.state.infoWindow.setContent("HELLOOOOOO!");
		this.state.infoWindow.open(this.props.map, this.props.infoWindowData.marker);
	}

	render () {
		return null;
	}
}
