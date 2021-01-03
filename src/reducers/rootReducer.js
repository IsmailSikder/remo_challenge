
import { combineReducers } from "redux";

import data from "./gameDataReducer";
import { userReducer } from "./user/user-reducer";

export default combineReducers({
     user : userReducer
});