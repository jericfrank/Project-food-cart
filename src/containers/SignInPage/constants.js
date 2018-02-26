import { REQUIRED, EMAIL, EMAIL_FILTER } from 'utils/validator';

export const AUTH_SIGNIN     = 'src/containers/SignInPage/AUTH_SIGNIN';
export const AUTH_SUCCESS    = 'src/containers/SignInPage/AUTH_SUCCESS';
export const AUTH_ERROR      = 'src/containers/SignInPage/AUTH_ERROR';
export const AUTH_SIGNOUT    = 'src/containers/SignInPage/AUTH_SIGNOUT';
export const AUTH_CURRENT    = 'src/containers/SignInPage/AUTH_CURRENT';
export const AUTH_SOCIAL_URL = 'src/containers/SignInPage/AUTH_SOCIAL_URL';

export const FIELDS = [
	{
		name     : "email",
		type     : "text",
		label    : "Email",
		icon     : "mail",
		validate : [ REQUIRED, EMAIL ],
		warn     : [ EMAIL_FILTER ]
	},
	{
		name     : "password",
		type     : "password",
		label    : "Password",
		icon     : "lock",
		validate : [ REQUIRED ],
		warn     : []
	}
];