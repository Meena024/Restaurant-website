import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import { useContext, useEffect, useState } from "react";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [qty, setQty] = useState(0);

  useEffect(() => {
    let totalQuantity = 0;
    cartCtx.items.forEach((item) => {
      totalQuantity += Number(item.qty);
    });
    setQty(totalQuantity);
  }, [cartCtx.items]);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{qty}</span>
    </button>
  );
};

export default HeaderCartButton;
