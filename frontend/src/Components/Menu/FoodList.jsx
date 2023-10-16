import React, { useEffect, useState } from "react";
import Food from "./Food";
import "./food-list.css";

const FoodList = ({ cartItems, setCartItems, setTotal }) => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    async function getFoods() {
      const response = await fetch("http://localhost:8080/api/foods", {
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());

      setFoods(response.data);
    }
    getFoods();
  }, []);

  return (
    <div className="food-list-container">
      <h2>Food Items:</h2>
      <div className="food-list">
        {foods &&
          foods.map((food) => (
            
            <Food
              id={food._id}
              name={food.name}
              image={food.image}
              description={food.description}
              price={food.price}
              key={food._id}
              cartItems={cartItems}
              setCartItems={setCartItems}
              setTotal={setTotal}
            />
          ))}
      </div>
    </div>
  );
};

export default FoodList;
