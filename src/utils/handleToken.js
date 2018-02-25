import CryptoJS from 'crypto-js';
import { setAuthorizationToken } from './request';

export function handleToken ( data ) {
	const { token, user } = data;

	const encrypt = CryptoJS.AES.encrypt( JSON.stringify( user ), token );

	localStorage.setItem( 'token', token );
	localStorage.setItem( 'client', encrypt );
	setAuthorizationToken( token );
}

export function expireToken () {
	localStorage.removeItem( 'token' );
	localStorage.removeItem( 'client' );
	setAuthorizationToken();
	return null;
}