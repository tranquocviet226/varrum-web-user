import { combineReducers } from 'redux'
import categoryReducer from './category/categoryReducer'
import commonReducer from './common/commonReducer'
import forumsReducer from './forums/forumsReducer'
import notificationReducer from './notification/notificationReducer'
import paginateReducer from './paginate/paginateReducer'
import postReducer from './post/postReducer'
import searchReducer from './search/searchReducer'
import userReducer from './user/userReducer'

const allReducers = combineReducers({
  common: commonReducer,
  users: userReducer,
  posts: postReducer,
  notifications: notificationReducer,
  categoriesReducer: categoryReducer,
  paginate: paginateReducer,
  searchs: searchReducer,
  forums: forumsReducer
})

const rootReducer = (state: any, action: any) => {
  return allReducers(state, action)
}

export default rootReducer

export type AppState = ReturnType<typeof rootReducer>
