import { combineReducers } from "redux";

import userReducer from "./reducers/userReducer";
import articleReducer from "./reducers/articleReducer";

const rootReduser = combineReducers({
  userState: userReducer,
  articleState: articleReducer,
});

export default rootReduser;
