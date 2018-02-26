import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';

import authReducer from 'containers/SignInPage/reducer';

const initialState = fromJS();

const rootReducer = combineReducers({
	auth : authReducer,
	form : formReducer
}, initialState);

export default rootReducer;
