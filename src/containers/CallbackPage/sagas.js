import { push } from 'react-router-redux';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getRequest } from 'utils/request';
import { handleToken } from 'utils/handleToken';

import { authSuccess } from 'containers/SignInPage/actions';
import { SOCIAL_SIGNIN } from './constants';

function* watchSocialSignin( action ) {
    try {
    	const { provider, code } = action.payload;
    	
    	const response = yield call( getRequest, `login/${provider}/callback?code=${code}` );

        yield call( handleToken, response )
        yield put( authSuccess( response.user ) );
        yield put( push( '/home' ) );
    } catch (e) {
    	yield put( push( '/' ) );
    }
}

function* saga() {
    yield takeLatest(SOCIAL_SIGNIN, watchSocialSignin);
}

export default saga;