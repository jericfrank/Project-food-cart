import { AUTH_SIGNIN, AUTH_SUCCESS, AUTH_ERROR, AUTH_SIGNOUT, AUTH_CURRENT, AUTH_SOCIAL_URL } from './constants';

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

export function authCurrent(payload) {
	return {
		type: AUTH_CURRENT,
		payload
	}
}

export function authSocialUrl(payload) {
	return {
		type: AUTH_SOCIAL_URL,
		payload
	}
}