import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import mainReducer from '../redux/reducers/mainReducer'

const history = createBrowserHistory()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducer = (history) => combineReducers({
  router: connectRouter(history),
  mainReducer
})

export default createStore(
  reducer(history),
  composeEnhancers(applyMiddleware(thunk, routerMiddleware(history))),
)