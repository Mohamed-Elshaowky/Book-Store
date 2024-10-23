import React, { useContext } from "react";
import "./CartCss.css";
import Ordersummary from "./Ordersummary";
import Cartitems from "./Cartitems";
import cartContext from "../../context/CartContext";

const Cart = () => {
  // Cart Data
  const { cartItems, addTocart, removeFromcart } = useContext(cartContext);

  const totalprice = cartItems
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toFixed(2);
  return (
    <div className="cart">
      <div className="cart-title">Your Shopping Cart</div>
      <div className="cart-wrapper">
        <Cartitems
          cartItems={cartItems}
          addTocart={addTocart}
          removeFromcart={removeFromcart}
        />
        <Ordersummary totalprice={totalprice} />
      </div>
    </div>
  );
};

export default Cart;
