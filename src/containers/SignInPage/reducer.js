import { fromJS } from 'immutable';
import { AUTH_SIGNIN, AUTH_ERROR } from './constants';

const initialState = fromJS( {
	authenticate : false,
	data         : {},
	errorMsg     : ''
} );

export default function(state = initialState, action) {
	switch(action.type) {
		case AUTH_SIGNIN:
			return state
				.set( 'errorMsg', '' )
				.set( 'authenticate', true )
				.set( 'data', action.payload );
		
		case AUTH_ERROR:
			return state
				.set( 'errorMsg', action.payload );

		default:
			return state;
	}	
}