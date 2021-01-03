
import rootReducer from "./rootReducer";

import {applyMiddleware,createStore} from 'redux'

import logger from 'redux-logger'

const middleware = [logger]
const store = createStore(rootReducer,applyMiddleware(...middleware))

export {store}