import { SOCIAL_SIGNIN } from './constants';

export function socialSignin(payload) {
	return {
		type: SOCIAL_SIGNIN,
		payload
	}
}