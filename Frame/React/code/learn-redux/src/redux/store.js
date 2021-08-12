import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import countReducer from "./reducers/count";
import personReducer from "./reducers/person";

import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
  count: countReducer,
  people: personReducer
});
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;