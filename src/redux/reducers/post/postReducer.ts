import { EPostActions } from '../../actions/post/EPostActions'
import { PostTypes } from '../../actions/post/postTypes'

const initialState: any = {
  newPosts: {
    content: []
  },
  trendingPosts: {
    content: []
  },
  randomPosts: {
    content: []
  },
  newsPosts: {
    content: []
  },
  newsPostsRandom: {
    content: []
  },
  gamesPosts: {
    content: []
  },
  gamesPostsRandom: {
    content: []
  },
  relatedPosts: {
    content: []
  },
  reviewsPosts: {
    content: []
  },
  reviewsPostsRandom: {
    content: []
  },
  trendingPagePosts: {
    content: []
  },
  highlightsPosts: {
    content: []
  },
  allPagePosts: {},
  searchPosts: {},
  userPosts: {}
}

const postReducer = (state = initialState, action: PostTypes) => {
  switch (action.type) {
    case EPostActions.FETCH_NEW_POSTS:
      return Object.assign({}, state, {
        newPosts: action.data
      })
    case EPostActions.FETCH_TOP_TRENDING:
      return Object.assign({}, state, {
        trendingPosts: action.data
      })
    case EPostActions.FETCH_RANDOM_POSTS:
      return Object.assign({}, state, {
        randomPosts: action.data
      })
    case EPostActions.FETCH_NEWS_POSTS:
      return Object.assign({}, state, {
        newsPosts: action.data
      })
    case EPostActions.FETCH_NEWS_POSTS_RANDOM:
      return Object.assign({}, state, {
        newsPostsRandom: action.data
      })
    case EPostActions.FETCH_GAMES_POSTS:
      return Object.assign({}, state, {
        gamesPosts: action.data
      })
    case EPostActions.FETCH_RELATED_POSTS:
      return Object.assign({}, state, {
        relatedPosts: action.data
      })
    case EPostActions.FETCH_GAMES_POSTS_RANDOM:
      return Object.assign({}, state, {
        gamesPostsRandom: action.data
      })
    case EPostActions.FETCH_REVIEWS_POSTS:
      return Object.assign({}, state, {
        reviewsPosts: action.data
      })
    case EPostActions.RANDOM_REVIEWS_POSTS:
      return Object.assign({}, state, {
        reviewsPostsRandom: action.data
      })
    case EPostActions.FETCH_TRENDINGS:
      return Object.assign({}, state, {
        trendingPagePosts: action.data
      })
    case EPostActions.FETCH_HIGHLIGHT_POST:
      return Object.assign({}, state, {
        highlightsPosts: action.data
      })
    case EPostActions.FETCH_ALL_PAGE:
      return Object.assign({}, state, {
        allPagePosts: action.data
      })
    case EPostActions.SEARCH_POSTS:
      return Object.assign({}, state, {
        searchPosts: action.data
      })
    case EPostActions.FETCH_USER_POSTS:
      return Object.assign({}, state, {
        userPosts: action.data
      })
    default:
      return state
  }
}

export default postReducer
