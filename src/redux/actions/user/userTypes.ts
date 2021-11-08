import { Action } from 'redux'
import { IAuth } from '../../../common/interfaces/auth/IAuth'
import { EUserActions } from './EUserActions'

export interface ISetUserAction extends Action {
  type: EUserActions.SET_USER_LOGIN
  auth: IAuth | undefined
}

export interface ILogoutAction extends Action {
  type: EUserActions.LOGOUT
}

export type UserTypes = ISetUserAction | ILogoutAction
