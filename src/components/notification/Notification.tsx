import MuiAlert, { AlertProps } from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import React from 'react'
import { useDispatch } from 'react-redux'
import { actionSetNotification } from '../../redux/actions/notification/notificationAction'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

interface Props {
  open: boolean
  message?: string
}

const Notification = ({ open, message }: Props) => {
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(actionSetNotification(false, ''))
  }

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      message={message}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert onClose={handleClose} severity='error' sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}

export default Notification
