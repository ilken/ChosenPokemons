import React from 'react';

export default class Header extends React.Component {
	render () {
		return (
            <nav className="navbar navbar-inverse navbar-fixed-top top-nav-collapse" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" target="_blank" href="#">
							<img className="img-responsive" src="" alt="PokeBall"/> Chosen Pokemons
						</a>
                    </div>
                </div>
            </nav>
		);
	}
}
