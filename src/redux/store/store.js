import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer } from "../reducers/index";

const enhancer = applyMiddleware(promiseMiddleware, thunk);
export const store = createStore(reducer, composeWithDevTools(enhancer));
