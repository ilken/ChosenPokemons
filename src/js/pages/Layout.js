import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import App from '../components/layout/App';

export default class Layout extends React.Component {
	render () {
		return (
            <div>
                <Header/>
				<App/>
				<Footer/>
            </div>
		);
	}
}
