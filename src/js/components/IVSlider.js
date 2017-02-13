import React from 'react';
import InputRange from 'react-input-range';
import { updateSliderValue } from '../actions/sliderActions';

export default class IVSlider extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			value: this.props.slider.value
		};
	}

	handleChange (value) {
		this.props.dispatch(updateSliderValue(value));
	}

	render () {
		return (
			<div className="slider">
				<InputRange
					ariaLabelledby=""
					ariaControls=""
			        maxValue={100}
			        minValue={90}
			        value={this.state.value}
			        onChange={value => this.setState({ value })}
			        onChangeComplete={this.handleChange.bind(this)} />
				<div className="sliderValue text-center">
					<h2 className="sliderText">Min IV: {this.state.value}% </h2>
				</div>
			</div>
		);
	}
}
