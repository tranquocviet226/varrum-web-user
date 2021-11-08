import { Action } from 'redux'
import { ICategory } from '../../../common/interfaces/category/ICategory'
import { ECategoryActions } from './ECategoryActions'

export interface IGetListCategoryAction extends Action {
  type: ECategoryActions.GET_LIST_CATEGORY
}

export interface ISetListCategoryAction extends Action {
  type: ECategoryActions.SET_LIST_CATEGORY
  categories: ICategory[]
}

export interface ISetForumsCategoryAction extends Action {
  type: ECategoryActions.SET_LIST_FORUMS_CATEGORY
  categories: ICategory[]
}

export type CategoryActionTypes =
  | IGetListCategoryAction
  | ISetListCategoryAction
  | ISetForumsCategoryAction
