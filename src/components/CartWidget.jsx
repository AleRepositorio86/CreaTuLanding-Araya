import React, {useContext} from "react";
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const { totalQty } = useContext(CartContext)
  return (
    <div className="cart-widget">
      <span role="img" aria-label="cart">🛒</span>
      {/* <span className="cart-count">3</span> */}
      <span className="cart-count">{totalQty}</span>
    </div>
  );
};

export default CartWidget;
