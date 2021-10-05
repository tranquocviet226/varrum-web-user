import { ENotificationActions } from '../../actions/notification/ENotificationActions'
import { NotificationTypes } from '../../actions/notification/notificationTypes'

const initialState = {
  open: false,
  message: ''
}

const notificationReducer = (
  state = initialState,
  action: NotificationTypes
) => {
  switch (action.type) {
    case ENotificationActions.SET_NOTIFICATION:
      return Object.assign({}, state, {
        open: action.open,
        message: action.message
      })

    default:
      return state
  }
}

export default notificationReducer
