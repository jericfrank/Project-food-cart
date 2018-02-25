import { fromJS } from 'immutable';
import { AUTH_SIGNIN, AUTH_SUCCESS, AUTH_ERROR, AUTH_SIGNOUT } from './constants';

const initialState = fromJS( {
	authenticate : false,
	loading      : false,
	errorMsg     : '',
	user         : {}
} );

export default function(state = initialState, action) {
	switch(action.type) {
		case AUTH_SIGNIN:
			return state
				.set( 'loading', true );
		
		case AUTH_SUCCESS:
			return state
				.set( 'loading', false )
				.set( 'authenticate', true )
				.set( 'errorMsg', '' )
				.set( 'user', action.payload );

		case AUTH_ERROR:
			return state
				.set( 'loading', false )
				.set( 'errorMsg', action.payload );

		case AUTH_SIGNOUT:
			return state
				.set( 'loading', false )
				.set( 'authenticate', false )
				.set( 'errorMsg', '' )
				.set( 'user', {} );

		default:
			return state;
	}	
}