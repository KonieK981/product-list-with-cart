import { createContext, useState, useReducer, useContext } from "react";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <CartContext.Provider
      value={{ state, dispatch, isModalOpen, setIsModalOpen }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
