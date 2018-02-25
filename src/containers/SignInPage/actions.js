import { AUTH_SIGNIN, AUTH_SUCCESS, AUTH_ERROR, AUTH_SIGNOUT } from './constants';

export function authSignin(payload) {
	return {
		type: AUTH_SIGNIN,
		payload
	}
}

export function authSuccess(payload) {
	return {
		type: AUTH_SUCCESS,
		payload
	}
}

export function authError(error) {
	return {
		type    : AUTH_ERROR,
		payload : error
	}
}

export function authSignout() {
	return {
		type: AUTH_SIGNOUT
	}
}