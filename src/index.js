import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';

import registerServiceWorker from './registerServiceWorker';

import './global-css.js';
import App from 'containers/App';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
	        <App />
	    </BrowserRouter>
	</Provider>,
    document.getElementById('root')
);

registerServiceWorker();
