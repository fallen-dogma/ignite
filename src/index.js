import './styles';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import reduxStore from './createStore';

import App from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(
	<Provider store={reduxStore}>
		<App />
	</Provider>,
	rootElement
);
