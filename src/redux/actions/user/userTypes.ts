import { Action } from 'redux'
import { EUserActions } from './EUserActions'

export interface IFetchUsersAction extends Action {
  type: EUserActions.FETCH_USER
  user: string
}

export type UserTypes = IFetchUsersAction
