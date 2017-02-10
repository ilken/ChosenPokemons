import React from 'react';
import { viewPokemonOnMap } from '../actions/mapActions';

export default class Pokemon extends React.Component {
	handleClick () {
		this.props.dispatch(viewPokemonOnMap(this.props.data));
	}

	render () {
		const data = this.props.data;
		const mapUrl = 'https://www.google.co.uk/maps/search/' + data.lat + ',' + data.lon;
		const despawn = new Date(data.expires * 1000);
		const hours = despawn.getHours();
		const minutes = '0' + despawn.getMinutes();
		const seconds = '0' + despawn.getSeconds();
		const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

		return (
			<div className="row pokemonContainer">
				<div className="col-md-1 col-sm-1 col-xs-2">
					<img className="img-responsive" src={'/img/pokemon/' + data.id + '.svg'} alt={data.name}/>
				</div>
				<div className="col-md-1 col-sm-5 col-xs-8 text-center">
					<span>{data.name}</span>
				</div>
				<div className="col-md-3 col-sm-6 col-xs-12 text-center">
					<span>Atk:{data.attack} | Def:{data.defence} | Sta:{data.stamina}</span>
				</div>
				<div className="col-md-1 col-sm-5 col-xs-6 text-center">
					<span>IV : {data.iv}%</span>
				</div>
				<div className="col-md-2 col-sm-6 col-xs-6 text-center">
					<span>Expires: {formattedTime}</span>
				</div>
				<div className="col-md-2 col-sm-6 col-xs-6 text-center">
					<a className="btn btn-block btn-success" onClick={this.handleClick.bind(this)}>
						<i className="fa fa-map-marker" aria-hidden="true" /> View on Map
					</a>
				</div>
				<div className="col-md-2 col-sm-6 col-xs-6 text-center">
					<a href={mapUrl} className="btn btn-block btn-primary" target="_blank">
						<i className="fa fa-map" aria-hidden="true" /> Get Directions
					</a>
				</div>
			</div>
		);
	}
}
