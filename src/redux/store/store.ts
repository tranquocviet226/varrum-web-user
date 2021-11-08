import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { persistStore, persistReducer, createTransform } from 'redux-persist'

export const ROOT_STATE = 'root'

const persistConfig = {
  key: ROOT_STATE,
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['users', 'searchs'],
  transforms: [
    createTransform(
      (inboundState) => ({ ...(inboundState as any), error: '' }),

      (outboundState) => ({ ...outboundState, error: '' }),
      { whitelist: ['users', 'searchs'] }
    )
  ]
}

const configureStore = () => {
  // var intialState = {};
  // try {
  //   intialState = localStorage.getItem(ROOT_STATE) ? JSON.parse(localStorage.getItem(ROOT_STATE)) : {};
  // } catch (error) {
  //   console.log('Something went wrong ', error)
  // }

  // const saver = () => next => action => {
  //   return next(action);
  // }
  return createStore(
    persistReducer(persistConfig, rootReducer),
    applyMiddleware(thunk)
  )
}

export const store = configureStore()
export const persistor = persistStore(store)

// store.subscribe(() => {
//   localStorage.setItem(ROOT_STATE, JSON.stringify(store.getState()))
// })
