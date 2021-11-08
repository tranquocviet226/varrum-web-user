import { Action } from 'redux'
import { ELikeActions } from './ELikeActions'

export interface ILikeAction extends Action {
  type: ELikeActions.LIKE
  forumId: string
}

export type ForumsTypes = ILikeAction
