import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (item) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (prevItem) => prevItem.id === item.id
      );
      const existingItem = prevItems[existingItemIndex];
      let updatedItems;

      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          qty: existingItem.qty + item.qty,
        };
        updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = prevItems.concat(item);
      }

      return updatedItems;
    });
  };

  const removeItemFromCartHandler = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const increaseItemQtyHandler = (id) => {
    setItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      );
    });
  };

  const decreaseItemQtyHandler = (id) => {
    setItems((prevItems) => {
      return prevItems
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0);
    });
  };

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    increaseItemQty: increaseItemQtyHandler,
    decreaseItemQty: decreaseItemQtyHandler,
    message: "Click here",
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
