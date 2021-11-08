import { Action } from 'redux'
import { EPaginateActions } from './EPaginateActions'

export interface IPaginateNewsAction extends Action {
  type: EPaginateActions.PAGINATE_NEWS
  page: number
}

export interface IPaginateTrendingAction extends Action {
  type: EPaginateActions.PAGINATE_TRENDING
  page: number
}

export interface IPaginateHighlightAction extends Action {
  type: EPaginateActions.PAGINATE_HIGHLIGHT
  page: number
}

export interface IPaginateAllAction extends Action {
  type: EPaginateActions.PAGINATE_ALL_PAGE
  page: number
}

export interface IPaginateGamesAction extends Action {
  type: EPaginateActions.PAGINATE_GAMES
  page: number
}

export interface IPaginateReviewsAction extends Action {
  type: EPaginateActions.PAGINATE_REVIEWS
  page: number
}

export interface IPaginateUsersAction extends Action {
  type: EPaginateActions.PAGINATE_USER_POSTS
  page: number
}

export type PaginateTypes =
  | IPaginateNewsAction
  | IPaginateTrendingAction
  | IPaginateHighlightAction
  | IPaginateAllAction
  | IPaginateGamesAction
  | IPaginateReviewsAction
  | IPaginateUsersAction
