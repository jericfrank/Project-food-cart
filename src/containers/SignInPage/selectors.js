import { createSelector } from 'reselect';

const selectSignInPageDomain = ( state ) => state.auth;

const selectSignInPageAuth = () => createSelector(
	selectSignInPageDomain,
	( substate ) => substate.get( 'authenticate' )
);

const selectSignInPageUser = () => createSelector(
	selectSignInPageDomain,
	( substate ) => substate.get( 'user' )
);

const selectSignInPageError = () => createSelector(
	selectSignInPageDomain,
	( substate ) => substate.get( 'errorMsg' )
);

export {
	selectSignInPageDomain,
	selectSignInPageAuth,
	selectSignInPageUser,
	selectSignInPageError
};