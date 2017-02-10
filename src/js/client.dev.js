import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './pages/Root.js';

import { AppContainer } from 'react-hot-loader';


const render = (Component) => {
	ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.getElementById('app')
    );
};

render(Root);

if (module.hot) {
	module.hot.accept('./pages/Root', () => {
		render(Root);
	});
}
