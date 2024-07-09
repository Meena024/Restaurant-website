import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li key={item.id} className={classes["cart-item"]}>
          <div>
            <h2>{item.name}</h2>
            <span className={classes.price}>${item.price.toFixed(2)}</span>
            <span className={classes.qty}>x {item.qty}</span>
          </div>
          <div className={classes.actions}>
            <button onClick={() => cartCtx.decreaseItemQty(item.id)}>-</button>
            <button onClick={() => cartCtx.increaseItemQty(item.id)}>+</button>
          </div>
        </li>
      ))}
    </ul>
  );

  const totalAmount = cartCtx.items.reduce((total, item) => {
    return total + item.qty * item.price;
  }, 0);

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount:</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
