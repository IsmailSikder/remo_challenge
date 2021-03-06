
import { combineReducers } from "redux";

import data from "./gameDataReducer";
import TablesReducer from "./tables/tables-reducer";

import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from "./user/user-reducer";

const rootReducer = combineReducers({
     tables : TablesReducer,
     user: userReducer
});

const persistConfig = {
     key:'root',
     storage: storage,
     whitelist: ['user']
 }
 export default persistReducer(persistConfig, rootReducer)