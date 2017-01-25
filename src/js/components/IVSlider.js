import React from 'react';
import Slider from 'react-rangeslider';
import * as Actions from "../actions/Actions";

export default class IVSlider extends React.Component {
	handleChange(value) {
		Actions.updateSlider(value);
	}

	render () {
		return (
			<div className="slider">
				<Slider
					min={80}
					max={100}
					step={1}
					labels={ {0: 'Low IV', 100: 'High IV'} }
					value={this.props.sliderValue}
					onChange={this.handleChange.bind(this)} />
          		<div>Value: {this.props.sliderValue}</div>
			</div>
		);
	}
}
