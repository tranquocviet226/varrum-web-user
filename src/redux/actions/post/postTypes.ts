import { Action } from 'redux'
import { IPaginate } from '../../../common/interfaces/IPaginate'
import { EPostActions } from './EPostActions'

export interface IFetchNewPostAction extends Action {
  type: EPostActions.FETCH_NEW_POSTS
  data: IPaginate
}

export interface IFetchTrendingPostAction extends Action {
  type: EPostActions.FETCH_TOP_TRENDING
  data: IPaginate
}

export interface IFetchRandomPostAction extends Action {
  type: EPostActions.FETCH_RANDOM_POSTS
  data: IPaginate
}

export interface IFetchNewsPostAction extends Action {
  type: EPostActions.FETCH_NEWS_POSTS
  data: IPaginate
}

export interface IFetchNewsPostRandomAction extends Action {
  type: EPostActions.FETCH_NEWS_POSTS_RANDOM
  data: IPaginate
}

export interface IFetchGamesPostAction extends Action {
  type: EPostActions.FETCH_GAMES_POSTS
  data: IPaginate
}

export interface IFetchGamesPostRandomAction extends Action {
  type: EPostActions.FETCH_GAMES_POSTS_RANDOM
  data: IPaginate
}

export interface IFetchRelatedPostAction extends Action {
  type: EPostActions.FETCH_RELATED_POSTS
  data: IPaginate
}

export interface IFetchReviewsPostAction extends Action {
  type: EPostActions.FETCH_REVIEWS_POSTS
  data: IPaginate
}

export interface IRandomReviewsPostAction extends Action {
  type: EPostActions.RANDOM_REVIEWS_POSTS
  data: IPaginate
}

export interface ITrendingPagePostAction extends Action {
  type: EPostActions.FETCH_TRENDINGS
  data: IPaginate
}

export interface IHighlightPostAction extends Action {
  type: EPostActions.FETCH_HIGHLIGHT_POST
  data: IPaginate
}

export interface IFetchAllPageAction extends Action {
  type: EPostActions.FETCH_ALL_PAGE
  data: IPaginate
}

export interface ISearchPostAction extends Action {
  type: EPostActions.SEARCH_POSTS
  data: IPaginate
  keyword?: string
}

export interface IUsersPostAction extends Action {
  type: EPostActions.FETCH_USER_POSTS
  data: IPaginate
  keyword?: string
}

export type PostTypes =
  | IFetchNewPostAction
  | IFetchTrendingPostAction
  | IFetchRandomPostAction
  | IFetchNewsPostAction
  | IFetchNewsPostRandomAction
  | IFetchGamesPostAction
  | IFetchGamesPostRandomAction
  | IFetchRelatedPostAction
  | IFetchReviewsPostAction
  | IRandomReviewsPostAction
  | ITrendingPagePostAction
  | IHighlightPostAction
  | IFetchAllPageAction
  | ISearchPostAction
  | IUsersPostAction
