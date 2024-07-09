import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import React, { useContext, useRef } from "react";
import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {
  const cartCtx = useContext(CartContext);
  const amountInputRef = useRef();

  const addItemToCart = (event) => {
    event.preventDefault();
    const amount = amountInputRef.current.value;
    const itemToAdd = { ...props.item, qty: Number(amount) };

    cartCtx.addItem(itemToAdd);
  };

  return (
    <form className={classes.form} onSubmit={addItemToCart}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
