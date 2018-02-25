import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

import store, { history } from './store';
import './global-css.js';
import App from 'containers/App';

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
	        <App />
	    </Router>
	</Provider>,
    document.getElementById('root')
);

registerServiceWorker();
