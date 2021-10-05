import { EUserActions } from '../../actions/user/EUserActions'
import { UserTypes } from '../../actions/user/userTypes'

const initialState = {
  user: ''
}

const userReducer = (state = initialState, action: UserTypes) => {
  switch (action.type) {
    case EUserActions.FETCH_USER:
      return Object.assign({}, state, {
        user: action.user
      })

    default:
      return state
  }
}

export default userReducer
