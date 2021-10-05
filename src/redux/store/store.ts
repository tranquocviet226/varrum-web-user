import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk))
}

export const store = configureStore()
