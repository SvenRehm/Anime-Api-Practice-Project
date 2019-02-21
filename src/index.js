import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware} from "redux"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import thunkMiddleware from "redux-thunk"
import reducer from "./reducers/index"


const middleware = [thunkMiddleware]

const store = createStore(reducer, applyMiddleware(...middleware))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
