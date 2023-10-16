import React, { useEffect, useState } from "react";

const CartItem = ({ name, qty, price, id, setTotal }) => {
  const [cartQty, setCartQty] = useState(qty);

  const setInput = (e, inputHandler) => {
    let q = parseInt(e.target.value);
    // setTotal((prevTotal) => {
    //   console.log(cartQty*price, price, typeof price, typeof cartQty, typeof q);
    //   let total = prevTotal - cartQty * price + q * price;
    //   console.log(total);
    //   return total;
    // });

   
    setTotal((prevTotal) => prevTotal - cartQty * price + q * price);
    inputHandler(q);
  };

  useEffect(() => {
    // Update total whenever qty changes
    // setTotal(cartItems.reduce((acc, curr) => acc + curr.qty * curr.price, 0));
    setCartQty(qty);
  }, [qty]);

  return (
    <div>
      <p>
        {name}-
        <input
          type="number"
          className="inpt"
          value={cartQty}
          onChange={(e) => setInput(e, setCartQty)}
        />
        <b> x </b>
        ₹ {price}= <b>₹ {price * cartQty}</b>
      </p>
    </div>
  );
};

export default CartItem;
