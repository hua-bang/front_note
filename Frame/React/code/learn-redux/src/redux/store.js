import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import countReducer from "./count_reducer";
const store = createStore(countReducer, applyMiddleware(thunk));

export default store;