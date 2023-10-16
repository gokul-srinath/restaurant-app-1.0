import React, { useState } from "react";
import "./food.css";

const Food = ({
  id,
  name,
  description,
  image,
  price,
  cartItems,
  setCartItems,
  setTotal,
}) => {
  const [qty, setQty] = useState(1);

  const setInput = (e, inputHandler) => {
    let q = parseInt(e.target.value);
    inputHandler(q);
  };

  const addToCart = () => {
    let doc = {
      id,
      name,
      price,
      qty,
    };

    if(qty == 0)  {
      return;
    }

    let newItems = { ...cartItems };
    
      if (!newItems[id]) {
        newItems[id] = doc;
        setCartItems(newItems);
        setTotal((prevTotal) => prevTotal + price * qty);
        return ;
      }

      
      
      newItems[id]["qty"] +=  qty;
      // console.log(newItems[id]["qty"] , price,newItems[id]["qty"] * price);
      // newItems[id]["price"] = newItems[id]["qty"] * price;

      


    setCartItems(newItems);
    setTotal((prevTotal) => prevTotal + price * qty);
  };

  return (
    <div className="food">
      <h3 style={{ color: "#d32f2f"}}>{name}</h3>
      <sub className="description">{description}</sub>
      <p>
        Price : <b>₹{price}</b>
      </p>
      <div className="controls">
        <div className="inpt-container">
          <label htmlFor="qty">qty: </label>
          <input
            type="number"
            id="qty"
            className="inpt"
            value={qty}
            min={0}
            onChange={(e) => setInput(e, setQty)}
          />
        </div>
        <button className="btn" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Food;
