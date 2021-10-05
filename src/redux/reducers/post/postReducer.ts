import { EPostActions } from '../../actions/post/EPostActions'
import { PostTypes } from '../../actions/post/postTypes'

const initialState = {
  newPosts: [],
  trendingPosts: [],
  randomPosts: []
}

const postReducer = (state = initialState, action: PostTypes) => {
  switch (action.type) {
    case EPostActions.FETCH_NEW_POSTS:
      return Object.assign({}, state, {
        newPosts: action.posts
      })
    case EPostActions.FETCH_TOP_TRENDING:
      return Object.assign({}, state, {
        trendingPosts: action.posts
      })
    case EPostActions.FETCH_RANDOM_POSTS:
      return Object.assign({}, state, {
        randomPosts: action.posts
      })
    default:
      return state
  }
}

export default postReducer
