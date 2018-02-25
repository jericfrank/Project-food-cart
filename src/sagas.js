import { fork, all } from 'redux-saga/effects';

import CallbackSaga from 'containers/CallbackPage/sagas';
import SignInPageSaga from 'containers/SignInPage/sagas';

export default function* rootSaga () {
    yield all([
    	fork( CallbackSaga ),
        fork( SignInPageSaga )
    ]);
};