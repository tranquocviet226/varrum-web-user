import MuiAlert, { AlertProps } from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionSetNotification } from '../../redux/actions/notification/notificationAction'
import { AppState } from '../../redux/reducers/rootReducer'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

const Notification = () => {
  const dispatch = useDispatch()
  const notifications = useSelector((state: AppState) => state.notifications)
  const handleClose = () => {
    dispatch(actionSetNotification(false))
  }

  return (
    <Snackbar
      open={notifications.open}
      autoHideDuration={3000}
      onClose={handleClose}
      message={notifications.message}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert
        onClose={handleClose}
        severity={notifications.notiType || 'error'}
        sx={{ width: '100%' }}
      >
        {notifications.message}
      </Alert>
    </Snackbar>
  )
}

export default Notification
