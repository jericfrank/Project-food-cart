import { AUTH_SIGNIN, AUTH_ERROR } from './constants';

export function authSignin(payload) {
	return {
		type: AUTH_SIGNIN,
		payload
	}
}

export function authError(error) {
	return {
		type    : AUTH_ERROR,
		payload : error
	}
}