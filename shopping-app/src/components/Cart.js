import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
const Cart = () => {
  const quantity = useSelector(state =>state.cart.totalQuantity)
  const arr = useSelector(state =>state.cart.itemsList)
  const dispatch = useDispatch()
  const showCart = ()=>{
    dispatch(cartActions.setShowCart())
  }
  return (
    <div className="cartIcon">
      <h3 onClick={showCart}>Cart: {arr.length} Items</h3>
    </div>
  );
};

export default Cart;
