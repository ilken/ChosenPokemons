import React from 'react';
import Slider from 'react-rangeslider';
import { updateSliderValue } from "../actions/sliderActions";

export default class IVSlider extends React.Component {
	handleChange(value) {
		this.props.dispatch(updateSliderValue(value));
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
					value={this.props.slider.value}
					onChange={this.handleChange.bind(this)} />
          		<div className="sliderValue text-center">
					<h2>Min IV%: {this.props.slider.value} </h2>
				</div>
			</div>
		);
	}
}
