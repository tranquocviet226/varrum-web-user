import {
  CommonActionTypes,
  CommonState
} from '../../actions/common/commonTypes'
import { ECommonActions } from '../../actions/common/ECommonActions'

const initialState: CommonState = {
  loading: false
}

const commonReducer = (state = initialState, action: CommonActionTypes) => {
  switch (action.type) {
    case ECommonActions.SET_LOADING:
      return Object.assign({}, state, {
        loading: action.loading
      })
    default:
      return state
  }
}

export default commonReducer
