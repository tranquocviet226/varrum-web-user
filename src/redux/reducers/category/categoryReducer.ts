import { CategoryActionTypes } from '../../actions/category/categoryTypes'
import { ECategoryActions } from '../../actions/category/ECategoryActions'

const initialState = {
  categories: [],
  forumsCategories: []
}

const categoryReducer = (state = initialState, action: CategoryActionTypes) => {
  switch (action.type) {
    case ECategoryActions.SET_LIST_CATEGORY:
      return Object.assign({}, state, {
        categories: action.categories
      })
    case ECategoryActions.SET_LIST_FORUMS_CATEGORY:
      return Object.assign({}, state, {
        forumsCategories: action.categories
      })
    default:
      return state
  }
}

export default categoryReducer
