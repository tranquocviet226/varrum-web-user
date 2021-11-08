import { Action } from 'redux'
import { ESearchActions } from './ESearchActions'

export interface ISetKeywordAction extends Action {
  type: ESearchActions.SET_KEYWORD
  keyword: string
}

export interface IRemoveKeywordAction extends Action {
  type: ESearchActions.REMOVE_KEYWORD
  index: number
}

export type SearchTypes = ISetKeywordAction | IRemoveKeywordAction
