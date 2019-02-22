import rootReducer from "../reducers"
import { createStore, applyMiddleware, compose  } from "redux"
import thunkMiddleware from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunkMiddleware]

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)))

export default store
