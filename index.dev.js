import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './src/js/pages/Root';
import store from './src/js/store';

import { AppContainer } from 'react-hot-loader';

require('./src/sass/main.scss');


const render = (Component) => {
	ReactDOM.render(
		<AppContainer>
			<Component store={store}/>
		</AppContainer>,
		document.getElementById('app')
	);
};

render(Root);

if (module.hot) {
	module.hot.accept('./src/js/pages/Root', () => {
		const newRoot = require('./src/js/pages/Root').default;
		render(newRoot);
	});
}
