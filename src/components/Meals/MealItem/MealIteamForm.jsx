import React from "react";

import Input from "../../UI/Input";

import classes from "./MealItemForn.module.css";

const MealIteamForm = ({ id }) => {
  return (
    <form className={classes.form}>
      <Input
        label='Amount'
        input={{
          type: "number",
          id: "amount_" + id,
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type='submit'> + Add</button>
    </form>
  );
};

export default MealIteamForm;
