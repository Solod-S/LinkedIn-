import { combineReducers } from "redux";

import userReducer from "./reducers/userReducer";

export const rootReduser = combineReducers({
  userState: userReducer,
});
