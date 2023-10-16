import React from "react";
import Cart from "./Cart/Cart";
import FoodList from "./Menu/FoodList";
import { useState } from "react";

const ParentMenu = () => {
  const [cartItems, setCartItems] = useState({});
  const [total, setTotal] = useState(0);
  return (
    <>
      <div style={{ width: "75vw" }}>
        <FoodList
          cartItems={cartItems}
          setCartItems={setCartItems}
          setTotal={setTotal}
        />
      </div>
      <div style={{ width: "25vw" }}>
        <Cart
          cartItems={cartItems}
          setCartItems={setCartItems}
          total={total}
          setTotal={setTotal}
        />
      </div>
    </>
  );
};

export default ParentMenu;
