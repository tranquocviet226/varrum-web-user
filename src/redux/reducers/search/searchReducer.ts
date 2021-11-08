import { ESearchActions } from '../../actions/search/ESearchActions'
import { SearchTypes } from '../../actions/search/searchTypes'

const initialState = {
  keywords: []
}

const searchReducer = (state = initialState, action: SearchTypes) => {
  switch (action.type) {
    case ESearchActions.SET_KEYWORD:
      const searchs = [...state.keywords]
      const checkExist = searchs.includes(action.keyword)
      if (!checkExist) {
        searchs.unshift(action.keyword)
        if (searchs.length > 8) {
          searchs.splice(-1)
        }
        return Object.assign({}, state, {
          keywords: searchs
        })
      }
      return state
    case ESearchActions.REMOVE_KEYWORD:
      const searchsRemove = [...state.keywords]
      searchsRemove.splice(action.index, 1)
      return Object.assign({}, state, {
        keywords: searchsRemove
      })
    default:
      return state
  }
}

export default searchReducer
