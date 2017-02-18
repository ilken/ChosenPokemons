import React from 'react';
import { switchPokemonList } from '../actions/switchActions';


export default class Layout extends React.Component {
	handleClick (type) {
		this.props.dispatch(switchPokemonList(type));
	}

	render () {
		const gen1Class = this.props.activeType === 'gen1' ? 'btn-primary' : 'btn-success';
		const gen2Class = this.props.activeType === 'gen2' ? 'btn-primary' : 'btn-success';
		const rareClass = this.props.activeType === 'rare' ? 'btn-primary' : 'btn-success';
		return (
            <div className="pokeSwitch row">
                <div className="col-md-4 col-sm-4 col-xs-4">
					<button type="button" className={'gen1 btn btn-block ' + gen1Class} onClick={this.handleClick.bind(this, 'gen1')}>Gen1</button>
				</div>
                <div className="col-md-4 col-sm-4 col-xs-4">
					<button type="button" className={'gen2 btn btn-block ' + gen2Class} onClick={this.handleClick.bind(this, 'gen2')}>Gen2</button>
				</div>
                <div className="col-md-4 col-sm-4 col-xs-4">
					<button type="button" className={'rare btn btn-block ' + rareClass} onClick={this.handleClick.bind(this, 'rare')}>Rare</button>
				</div>
            </div>
		);
	}
}
