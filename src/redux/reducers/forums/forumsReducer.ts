import { EForumActions } from '../../actions/forums/EForumActions'
import { ForumsTypes, IForumsState } from '../../actions/forums/forumTypes'
import { ELikeActions } from '../../actions/like/ELikeActions'

const initialState: IForumsState = {
  newForums: undefined,
  forumsByCategory: undefined,
  userForums: undefined
}

const forumsReducer = (state = initialState, action: ForumsTypes) => {
  switch (action.type) {
    case EForumActions.FETCH_NEW_FORUMS:
      return Object.assign({}, state, {
        newForums: action.data
      })
    case EForumActions.FETCH_FORUMS_BY_CATEGORY:
      return Object.assign({}, state, {
        forumsByCategory: action.data
      })
    case EForumActions.FETCH_MORE_FORUMS_BY_CATEGORY:
      const moreForums = [...state.forumsByCategory.content]
      const arr = moreForums.concat(action.data.content)
      const result = action.data
      result.content = arr

      return Object.assign({}, state, {
        forumsByCategory: result
      })
    case EForumActions.FETCH_USER_FORUMS:
      return Object.assign({}, state, {
        userForums: action.data
      })
    case ELikeActions.LIKE:
      const newForumsCate = { ...state.forumsByCategory }
      const indexForum = newForumsCate.content.findIndex(
        (item) => item.id === action.forumId
      )
      newForumsCate.content[indexForum].userLike =
        !state.forumsByCategory.content[indexForum].userLike
      if (newForumsCate.content[indexForum].userLike) {
        // like
        newForumsCate.content[indexForum].likes =
          state.forumsByCategory.content[indexForum].likes + 1
      } else {
        // unlike
        newForumsCate.content[indexForum].likes =
          state.forumsByCategory.content[indexForum].likes - 1
      }
      return Object.assign({}, state, {
        forumsByCategory: newForumsCate
      })
    default:
      return state
  }
}

export default forumsReducer
