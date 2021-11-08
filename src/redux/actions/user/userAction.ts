import { Dispatch } from 'redux'
import { IAuth } from '../../../common/interfaces/auth/IAuth'
import { IFbLogin } from '../../../common/interfaces/user/IFbLogin'
import { IFbRegister } from '../../../common/interfaces/user/IFbRegister'
import { ILogin } from '../../../common/interfaces/user/ILogin'
import { IRegister } from '../../../common/interfaces/user/IRegister'
import { parseError } from '../../../common/untils/functons'
import { UserApi } from '../../../network/api/user/userApi'
import { configResponse } from '../../../network/responsive'
import { actionSetNotification } from '../notification/notificationAction'
import { EUserActions } from './EUserActions'

export const actionLogin = (params: ILogin) => {
  return async (dispatch: Dispatch) => {
    const response = await UserApi.login(params)
    const data = configResponse(response)
    if (data.errorType)
      return dispatch(actionSetNotification(true, parseError(data)))
    return dispatch(setUserLogin(data))
  }
}

export const setUserLogin = (auth: IAuth) => {
  return {
    type: EUserActions.SET_USER_LOGIN,
    auth
  }
}

export const actionRegister = (params: IRegister) => {
  return async (dispatch: Dispatch) => {
    const response = await UserApi.register(params)
    const data = configResponse(response)
    if (data.errorType) {
      dispatch(actionSetNotification(true, parseError(data)))
    } else return data
  }
}

export const actionLogout = () => {
  return {
    type: EUserActions.LOGOUT
  }
}

export const actionFbRegister = (params: IFbRegister) => {
  return async () => {
    const response = await UserApi.fbRegister(params)
    const data = configResponse(response)

    if (!data.errorType) return data
  }
}

export const actionFbLogin = (
  params: IFbLogin,
  callBack?: (data: any) => void
) => {
  return async (dispatch: Dispatch) => {
    const response = await UserApi.fbLogin(params)
    const data = configResponse(response)
    callBack(data)
    if (!data.errorType) return dispatch(setUserLogin(data))
  }
}
