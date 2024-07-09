import React from "react";

const CartContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  increaseItemQty: (id) => {},
  decreaseItemQty: (id) => {},
});

export default CartContext;
