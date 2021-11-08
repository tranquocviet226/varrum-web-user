import { Action } from 'redux'
import { IPaginate } from '../../../common/interfaces/IPaginate'
import { ELikeActions } from '../like/ELikeActions'
import { EForumActions } from './EForumActions'

export interface IForumsState {
  newForums: IPaginate | undefined
  forumsByCategory: IPaginate | undefined
  userForums: IPaginate | undefined
}

export interface IFetchNewForumAction extends Action {
  type: EForumActions.FETCH_NEW_FORUMS
  data: IPaginate
}

export interface IFetchForumByCategoryAction extends Action {
  type: EForumActions.FETCH_FORUMS_BY_CATEGORY
  data: IPaginate
}

export interface IFetchMoreForumByCategoryAction extends Action {
  type: EForumActions.FETCH_MORE_FORUMS_BY_CATEGORY
  data: IPaginate
}

export interface ILikeAction extends Action {
  type: ELikeActions.LIKE
  forumId: string
}

export interface IFetchUserForums extends Action {
  type: EForumActions.FETCH_USER_FORUMS
  data: IPaginate
}

export type ForumsTypes =
  | IFetchNewForumAction
  | IFetchForumByCategoryAction
  | ILikeAction
  | IFetchMoreForumByCategoryAction
  | IFetchUserForums
