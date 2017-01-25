import React from 'react';

export default class Pokemon extends React.Component {
	render () {
		const data = this.props.data;

		return (
			<div className="row">
				<div className="col-md-4 col-sm-4 col-xs-12">
					{data.name}
				</div>
				<div className="col-md-2 col-sm-2 col-xs-12">
					{data.iv} %
				</div>
				<div className="col-md-6 col-sm-6 col-xs-12">
					{data.lat}, {data.lon}
				</div>
			</div>
		);
	}
}
