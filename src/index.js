import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import * as serviceWorker from "./serviceWorker"
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from "redux-saga"
import { showDebugData } from "helpers/env"
import { logger } from "redux-logger"
import { Provider } from "react-redux"
import { reducers } from "reducers"
import { sagas } from "sagas"
import { App } from "containers"

import "./index.scss"

const saga = createSagaMiddleware()
const publicURL = process.env.REACT_APP_PUBLIC_URL

export const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(...[logger, saga])
))

saga.run(sagas)

showDebugData()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename={publicURL}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()