import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers/index';

const enhancer = applyMiddleware(promiseMiddleware, thunk);
const store = createStore(reducer, composeWithDevTools(enhancer));

export default store;
