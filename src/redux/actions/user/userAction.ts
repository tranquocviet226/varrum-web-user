import { Dispatch } from 'redux'
import { EUserActions } from './EUserActions'

export const fetchUser = (user: string) => {
  return {
    type: EUserActions.FETCH_USER,
    user
  }
}

export const fetchUserInfo = () => {
  return (dispatch: Dispatch) => {
    // request api
    const response = 'Hello worrl'
    return dispatch(fetchUser(response))
  }
}
