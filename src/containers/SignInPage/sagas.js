import { push } from 'react-router-redux';
import { call, put, takeLatest } from 'redux-saga/effects';
import { postRequest, getRequest } from 'utils/request';
import { handleToken, expireToken } from 'utils/handleToken';

import { authSuccess, authError, authSignout } from './actions';
import { AUTH_SIGNIN, AUTH_SIGNOUT } from './constants';

function* watchAuthSignin( action ) {
    try {
        const response = yield call( postRequest, 'login', action.payload );

        yield call( handleToken, response )
        yield put( authSuccess( response.user ) );
        yield put( push( '/' ) );
    } catch (e) {
        yield put( authError( e ) );
    }
}

function* watchAuthSignout() {
    try {
        yield call( getRequest, 'logout' );
        yield call( expireToken );
        yield put( authSignout() );
        yield put( push( '/signin' ) );
    } catch (e) {
        yield put( push( '/signin' ) );
    }
}

function* saga() {
    yield takeLatest(AUTH_SIGNIN, watchAuthSignin);
    yield takeLatest(AUTH_SIGNOUT, watchAuthSignout);
}

export default saga;