import { push } from 'react-router-redux';
import { call, put, takeLatest } from 'redux-saga/effects';
import { postRequest } from 'utils/request';
import { handleToken } from 'utils/handleToken';

import { authSuccess, authError } from './actions';
import { AUTH_SIGNIN } from './constants';

function* authSignin( action ) {
    try {
        const response = yield call( postRequest, 'login', action.payload );

        yield call( handleToken, response )
        yield put( authSuccess( response.user ) );
        yield put( push( '/' ) );
    } catch (e) {
        yield put( authError( e ) );
    }
}

function* saga() {
    yield takeLatest(AUTH_SIGNIN, authSignin);
}

export default saga;