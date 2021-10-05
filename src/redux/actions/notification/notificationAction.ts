import { ENotificationActions } from './ENotificationActions'

export const actionSetNotification = (open: boolean, message: string) => {
  return {
    type: ENotificationActions.SET_NOTIFICATION,
    open,
    message
  }
}
