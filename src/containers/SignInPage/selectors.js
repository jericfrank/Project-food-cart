import { createSelector } from 'reselect';

const selectSignInPageDomain = ( state ) => state.auth;

const selectSigninPageError = () => createSelector(
	selectSignInPageDomain,
	( substate ) => substate.get( 'errorMsg' )
);

export {
	selectSignInPageDomain,
	selectSigninPageError
};