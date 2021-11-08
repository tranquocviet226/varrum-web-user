import { AlertColor } from '@mui/material'
import { Action } from 'redux'
import { ENotificationActions } from './ENotificationActions'

export interface ISetNotificationAction extends Action {
  type: ENotificationActions.SET_NOTIFICATION
  open: boolean
  message: string
  notiType: AlertColor
}

export type NotificationTypes = ISetNotificationAction
