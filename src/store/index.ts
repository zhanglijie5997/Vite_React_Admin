import {applyMiddleware, createStore, combineReducers, } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import * as allReducer from './actions';
import { History } from 'history';
import { reduxSetStore } from './plugin/plugin';
const combinReducer = combineReducers(allReducer);

const store = (history: History) => {
  const middleware = applyMiddleware(routerMiddleware(history), reduxSetStore(), thunkMiddleware, );
  return createStore(combinReducer, middleware);
};
export default store;
