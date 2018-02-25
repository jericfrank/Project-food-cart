import CryptoJS from 'crypto-js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

import store, { history } from './store';
import './global-css.js';
import App from 'containers/App';

import { authCurrent } from 'containers/SignInPage/actions';
import { setAuthorizationToken } from 'utils/request';
import { expireToken } from 'utils/handleToken';

if ( localStorage.getItem( 'token' ) ) {
	try {
		const token  = localStorage.getItem( 'token' );
		const client = localStorage.getItem( 'client' );

		const jsonString = CryptoJS.AES.decrypt( client, token )
		const user       = JSON.parse( jsonString.toString( CryptoJS.enc.Utf8 ) );

		setAuthorizationToken( token );
		store.dispatch( authCurrent( user ) );
	} catch ( err ) {
		expireToken();
	}
}

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
	        <App />
	    </Router>
	</Provider>,
    document.getElementById('root')
);

registerServiceWorker();
