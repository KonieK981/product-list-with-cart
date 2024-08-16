import { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const reducer = (state, action) => {
  if (action.type === "increment") {
    const item = action.payload;
    return state[item]
      ? { ...state, [item]: state[item] + 1 }
      : { ...state, [item]: 1 };
  }
  if (action.type === "decrement") {
    const item = action.payload;
    return { ...state, [item]: state[item] - 1 };
  }
  return state;
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {});

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
