import React from 'react';
import Layout from '../components/Layout.js';
import {Provider} from 'react-redux';
import store from '../store';

export default class Root extends React.Component {
	render () {
		return (
            <Provider store={store}>
				<Layout/>
			</Provider>
		);
	}
}
