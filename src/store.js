import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';

import createHistory from 'history/createBrowserHistory';
import DevTools from 'components/DevTools';

import reducer from './reducers';
import sagas from './sagas';

export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
	sagaMiddleware,
	routerMiddleware( history )
];

const enhancer = compose(
	applyMiddleware( ...middlewares ),
	DevTools.instrument()
);

const store = createStore(
	reducer,
	enhancer
);

sagaMiddleware.run( sagas );

export default store;