import { Action } from 'redux'
import { ECommonActions } from './ECommonActions'

export interface CommonState {
  loading: boolean | undefined
}

export interface ISetLoading extends Action {
  type: ECommonActions.SET_LOADING
  loading: boolean
}

export type CommonActionTypes = ISetLoading
