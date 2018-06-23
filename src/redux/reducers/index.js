import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { people } from "./people";
export const reducer = combineReducers({
  router: routerReducer,
  people
});
