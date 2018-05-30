import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import counter from './reducers/counterReducer'
import online from './reducers/netStatusReducer'

export default function (initState = {}) {
  const rootReducer = combineReducers({
    counter: counter,
    online: online
  })
  return createStore(rootReducer, initState, applyMiddleware(thunk))
}
