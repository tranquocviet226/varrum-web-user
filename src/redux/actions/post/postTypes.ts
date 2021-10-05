import { Action } from 'redux'
import { IPost } from '../../../common/interfaces/post/IPost'
import { EPostActions } from './EPostActions'

export interface IFetchNewPostAction extends Action {
  type: EPostActions.FETCH_NEW_POSTS
  posts: IPost[]
}

export interface IFetchTrendingPostAction extends Action {
  type: EPostActions.FETCH_TOP_TRENDING
  posts: IPost[]
}

export interface IFetchRandomPostAction extends Action {
  type: EPostActions.FETCH_RANDOM_POSTS
  posts: IPost[]
}

export type PostTypes =
  | IFetchNewPostAction
  | IFetchTrendingPostAction
  | IFetchRandomPostAction
