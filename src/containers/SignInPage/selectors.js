import { createSelector } from 'reselect';

const selectSignInPageDomain = ( state ) => state.auth;

const makeSelectUser = () => createSelector(
	selectSignInPageDomain,
	( substate ) => substate.get( 'data' )
);

const makeSelectError = () => createSelector(
	selectSignInPageDomain,
	( substate ) => substate.get( 'errorMsg' )
);

export {
	selectSignInPageDomain,
	makeSelectUser,
	makeSelectError
};