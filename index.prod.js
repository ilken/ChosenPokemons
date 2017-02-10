import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './src/js/pages/Root.js';
import store from './src/js/store';

require('./src/sass/main.scss');

ReactDOM.render(<Root store={store}/>, document.getElementById('app'));
