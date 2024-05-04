import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartItems = useSelector(state => state.cart.itemsList)
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((i) => {
          return <li key={i.id} >

            <CartItem quantity={i.quantity} id={i.id} price={i.price} name={i.name} total={i.totalPrice} />
          </li>

        })}
      </ul>
    </div>
  );
};

export default CartItems;
