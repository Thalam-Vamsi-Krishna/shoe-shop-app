import { createContext } from "react";

const CartContext = createContext({
  items: [],
  totalAmount:0,
  addItem: (item, quantity, size) => {},
});

export default CartContext;
