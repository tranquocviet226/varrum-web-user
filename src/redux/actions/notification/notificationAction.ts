import { AlertColor } from '@mui/material'
import { ENotificationActions } from './ENotificationActions'

export const actionSetNotification = (
  open: boolean,
  message?: string,
  notiType?: AlertColor
) => {
  return {
    type: ENotificationActions.SET_NOTIFICATION,
    open,
    message,
    notiType
  }
}
