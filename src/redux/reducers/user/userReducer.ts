import { setToken } from '../../../common/untils/helpers'
import { EUserActions } from '../../actions/user/EUserActions'
import { UserTypes } from '../../actions/user/userTypes'

const initialState: any = {
  auth: undefined
}

const userReducer = (state = initialState, action: UserTypes) => {
  switch (action.type) {
    case EUserActions.SET_USER_LOGIN:
      const token = action.auth.token.accessToken
      setToken(token)
      return Object.assign({}, state, {
        auth: action.auth
      })
    case EUserActions.LOGOUT:
      return {
        state: {
          auth: undefined
        }
      }
    default:
      return state
  }
}

export default userReducer
