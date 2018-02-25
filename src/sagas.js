import { fork, all } from 'redux-saga/effects';

import SignInPageSaga from 'containers/SignInPage/sagas';

export default function* rootSaga () {
    yield all([
        fork( SignInPageSaga )
    ]);
};