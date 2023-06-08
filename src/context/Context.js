import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "../reducers/CartReducer";

const Cart = createContext();

export const Context = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, { cart: [] });
  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export const CartState = () => {
  return useContext(Cart);
};
