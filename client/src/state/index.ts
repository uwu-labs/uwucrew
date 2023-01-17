import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import uwuReducer from 'state/reducers/uwu';
import navigationReducer from './reducers/navigation';
import nekoboxReducer from 'state/reducers/nekouwu';

import thunk from 'redux-thunk';

const sagaMiddleware = createSagaMiddleware();

export const reducers = combineReducers({
	uwu: uwuReducer,
	navigation: navigationReducer,
	nekobox: nekoboxReducer
});

export const store = createStore(reducers, composeWithDevTools({ trace: true })(applyMiddleware(sagaMiddleware), applyMiddleware(thunk)));

export type RootState = ReturnType<typeof store.getState>;
