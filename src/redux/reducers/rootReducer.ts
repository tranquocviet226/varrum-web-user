import { combineReducers } from 'redux'
import notificationReducer from './notification/notificationReducer'
import postReducer from './post/postReducer'
import userReducer from './user/userReducer'
const allReducers = combineReducers({
  users: userReducer,
  posts: postReducer,
  notifications: notificationReducer
})

const rootReducer = (state: any, action: any) => {
  return allReducers(state, action)
}

export default rootReducer

export type AppState = ReturnType<typeof rootReducer>
