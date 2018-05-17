import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import counter from './reducers/counterReducer'

export default function (initState = {}) {
  const rootReducer = combineReducers({
    counter: counter
  })

  return createStore(rootReducer, initState, applyMiddleware(thunk))
}
