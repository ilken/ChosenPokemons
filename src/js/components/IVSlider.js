import React from 'react';
import Slider from 'react-rangeslider-extended';
import * as Actions from "../actions/Actions";

export default class IVSlider extends React.Component {
	handleChange(value) {
		Actions.updateSlider(value);
	}

	render () {
		const labels = {80: 'Low IV', 100: 'High IV'};
		return (
			<div className="slider">
				<Slider
					min={80}
					max={100}
					step={1}
					labels={labels}
					value={this.props.sliderValue}
					onChangeComplete={this.handleChange.bind(this)} />
          		<div className="sliderValue text-center">
					<h2>Min IV%: {this.props.sliderValue} </h2>
				</div>
			</div>
		);
	}
}
