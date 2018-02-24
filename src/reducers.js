import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from 'containers/SignInPage/reducer';

const rootReducer = combineReducers({
	auth : authReducer,
	form : formReducer
});

export default rootReducer;
