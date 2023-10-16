import React from "react";
import "./cart.css";
import CartItem from "./CartItem";

const Cart = ({ cartItems, setCartItems, total, setTotal }) => {
  // useEffect(() => {
  // setTotal(cartItems.reduce((acc, curr) => acc + curr.qty * curr.price, 0));
  // }, []);

  return (
    <div className="cart-container">
      <h3>Cart:</h3>
      <ol>
        {Object.keys(cartItems).length > 0 &&
          Object.keys(cartItems).map((it) => {
            let item = cartItems[it];
            return (
              <li>
                <CartItem
                  name={item.name}
                  qty={item.qty}
                  price={item.price}
                  key={item.id}
                  id={item.id}
                  setTotal={setTotal}
                  setCartItems={setCartItems}
                />
              </li>
            );
          })}
      </ol>
      <h4>Total: ₹ {total}</h4>
    </div>
  );
};

export default Cart;
