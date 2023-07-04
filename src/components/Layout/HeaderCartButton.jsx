import { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

import CartContext from "../../store/cart-context";

const HeaderCartButton = ({ onClick }) => {
  // This component will be re-evaluated whenever the context changed.
  const cartContext = useContext(CartContext);

  const numberOfCartItems = cartContext.items.reduce((accumulator, item) => {
    return accumulator + item.amount;
  }, 0);

  return (
    <button onClick={onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>

      <span>Your Cart</span>

      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
