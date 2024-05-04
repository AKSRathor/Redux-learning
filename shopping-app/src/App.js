import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Notification from "./components/Notification";
import {uiActions} from "./store/ui-slice"

let isFirstRender = true;
function App() {
  const dispatch  =useDispatch()
  const cart = useSelector((state) => state.cart)
  const cartItems = useSelector((state) => state.cart.itemsList)
  const notification = useSelector(state=>state.ui.notification)
  console.log(cartItems)
  useEffect(() => {
    if(isFirstRender){
      isFirstRender = false;
      return ;
    }
    const sendRequest = async () => {
      // dispatch(uiActions.showNotification({
      //   open: true,
      //   message: "Sending request",
      //   type: "warning"
      // }))
      const res = await fetch('https://redux-http-c3d7d-default-rtdb.firebaseio.com/cartItems.json', {
        method: "PUT",
        body: JSON.stringify(cart)
      })
      const data = await res.json()
      
        dispatch(uiActions.showNotification({
          open: true,
          message: "Sent Request to database successfully",
          type: "success"
        }))
    }
    sendRequest().catch(err =>{
      dispatch(uiActions.showNotification({
        open: true,
        message: "Reqeust sending data failed",
        type: "error"
      }))
    })
    return () => {

    }
  }, [cart])

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  console.log(isLoggedIn)
  return (

    <div className="App">
     {notification && <Notification type={notification.type} message = {notification.message}/>}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
