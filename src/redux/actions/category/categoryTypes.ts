import { Action } from 'redux'
import { ECategoryActions } from './ECategoryActions'

export interface IGetListCategoryAction extends Action {
  type: ECategoryActions.GET_LIST_CATEGORY
}

export type CategoryActionTypes = IGetListCategoryAction
