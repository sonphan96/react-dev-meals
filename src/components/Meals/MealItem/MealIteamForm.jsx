import React, { useRef, useState } from "react";

import Input from "../../UI/Input";

import classes from "./MealItemForn.module.css";

const MealIteamForm = ({ id, onAddToCart }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    // const enteredAmountNumer = parseInt(enteredAmount);
    const enteredAmountNumer = +enteredAmount;

    if (
      // enteredAmount.trim() !== "" ||
      enteredAmountNumer < 1 ||
      enteredAmountNumer > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(enteredAmountNumer);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          type: "number",
          id: "amount_" + id,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />

      {!amountIsValid && <p>Please enter a valid amount (1 - 5)</p>}
      <button type='submit'> + Add</button>
    </form>
  );
};

export default MealIteamForm;
