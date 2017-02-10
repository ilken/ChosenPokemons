import React from 'react';
import Layout from '../components/Layout.js';
import { Provider } from 'react-redux';

export default class Root extends React.Component {
	render () {
		const { store } = this.props;

		return (
            <Provider store={store}>
				<Layout/>
			</Provider>
		);
	}
}
