import React, { useContext, useReducer } from "react";
import porducts from "../data/cartData";
import { cartReducer } from "./cartReducer";

const cartContext = React.createContext();

export const useCart = () => {
  return useContext(cartContext);
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    porducts: porducts,
    cart: [],
  });

  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export default Context;
