import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import { rootReduser } from "./rootReducer";
const store = createStore(rootReduser, applyMiddleware(thunkMiddleware));

export default store;
