import { EPaginateActions } from '../../actions/pagination/EPaginateActions'
import { PaginateTypes } from '../../actions/pagination/paginateTypes'

const initialState = {
  paginateNews: 1,
  paginateTrending: 1,
  paginateHighlight: 1,
  paginateAllPage: 1,
  paginateGames: 1,
  paginateReviews: 1,
  paginateUserPosts: 1
}

const paginateReducer = (state = initialState, action: PaginateTypes) => {
  switch (action.type) {
    case EPaginateActions.PAGINATE_NEWS:
      return Object.assign({}, state, {
        paginateNews: action.page
      })
    case EPaginateActions.PAGINATE_TRENDING:
      return Object.assign({}, state, {
        paginateTrending: action.page
      })
    case EPaginateActions.PAGINATE_HIGHLIGHT:
      return Object.assign({}, state, {
        paginateHighlight: action.page
      })
    case EPaginateActions.PAGINATE_ALL_PAGE:
      return Object.assign({}, state, {
        paginateAllPage: action.page
      })
    case EPaginateActions.PAGINATE_GAMES:
      return Object.assign({}, state, {
        paginateGames: action.page
      })
    case EPaginateActions.PAGINATE_REVIEWS:
      return Object.assign({}, state, {
        paginateReviews: action.page
      })
    case EPaginateActions.PAGINATE_USER_POSTS:
      return Object.assign({}, state, {
        paginateUserPosts: action.page
      })
    default:
      return state
  }
}

export default paginateReducer
