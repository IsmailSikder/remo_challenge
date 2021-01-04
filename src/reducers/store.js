
import rootReducer from "./rootReducer";
import {persistStore} from 'redux-persist'
import {applyMiddleware,createStore} from 'redux'

import logger from 'redux-logger'

const middleware = [logger]
const store = createStore(rootReducer,applyMiddleware(...middleware))

const persistor = persistStore(store)

export {store, persistor}