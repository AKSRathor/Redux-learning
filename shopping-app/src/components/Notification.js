import React from 'react'
import {Alert} from "@mui/material"
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../store/ui-slice'

const Notification = ({type, message}) => {
    const dispatch = useDispatch()
    const notification  =useSelector(state=>state.ui.notification)
    dispatch(
        uiActions.showNotification({
            open: false
        })
    )
  return (
    <div>
        {notification.open && <Alert severity={type}>{message}</Alert>}
        
    </div>
  )
}

export default Notification