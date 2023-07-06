import React, { useContext } from "react";

import MealIteamForm from "./MealIteamForm";

import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";

const MealItem = ({ name, description, price, id }) => {
  const cartContext = useContext(CartContext);
  const mealPrice = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id,
      name,
      amount,
      price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>

        <div className={classes.description}>{description}</div>

        <div className={classes.price}>{mealPrice}</div>
      </div>
      <div>
        <MealIteamForm onAddToCart={addToCartHandler} id={id} />
      </div>
    </li>
  );
};

export default MealItem;
