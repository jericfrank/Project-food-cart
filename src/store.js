import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';

import createHistory from 'history/createBrowserHistory';

import reducer from './reducers';
import sagas from './sagas';

export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
	sagaMiddleware,
	routerMiddleware( history )
];

const store = createStore(
	reducer,
	applyMiddleware( ...middlewares )
);

sagaMiddleware.run( sagas );

export default store;