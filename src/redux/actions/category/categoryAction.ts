import { Dispatch } from 'redux'
import { ICategory } from '../../../common/interfaces/category/ICategory'
import { IParamsPaginate } from '../../../common/interfaces/IParamsPaginate'
import { parseError } from '../../../common/untils/functons'
import { CategoryApi } from '../../../network/api/category/categoryApi'
import { configResponse } from '../../../network/responsive'
import { actionSetNotification } from '../notification/notificationAction'
import { ECategoryActions } from './ECategoryActions'

export const actionGetListCategory = (params?: IParamsPaginate) => {
  return async (dispatch: Dispatch) => {
    const response = await CategoryApi.getListCategory(params)
    const data = configResponse(response)

    if (!data.errorType) return dispatch(setListCategories(data?.content))
    else {
      dispatch(actionSetNotification(true, parseError(data)))
    }
  }
}

export const setListCategories = (categories: ICategory[]) => {
  return {
    type: ECategoryActions.SET_LIST_CATEGORY,
    categories
  }
}
export const getForumsCategories = (params?: IParamsPaginate) => {
  return async (dispatch: Dispatch) => {
    const response = await CategoryApi.getForumsCategory(params)
    const data = configResponse(response)

    if (!data.errorType) return dispatch(setForumsCategories(data?.content))
    else {
      dispatch(actionSetNotification(true, parseError(data)))
    }
  }
}

export const setForumsCategories = (categories: ICategory[]) => {
  return {
    type: ECategoryActions.SET_LIST_FORUMS_CATEGORY,
    categories
  }
}
