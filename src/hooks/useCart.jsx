import {
  createContext,
  useState,
  useReducer,
  useContext,
  useMemo,
  useEffect,
} from "react";
import data from "../../data.json";
const CartContext = createContext();

const reducer = (state, action) => {
  const item = action.payload;
  if (action.type === "increment") {
    return state[item]
      ? { ...state, [item]: state[item] + 1 }
      : { ...state, [item]: 1 };
  }
  if (action.type === "decrement") {
    const value = { ...state, [item]: state[item] - 1 };
    if (value[item] === 0) delete value[item];
    return value;
  }
  if (action.type === "remove-product") {
    const filtered = { ...state };
    delete filtered[item];
    return filtered;
  }
  if (action.type === "reset") {
    return {};
  }
  return state;
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const list = await data;
      setProducts(list);
    };
    getData();
  }, []);

  const totalAmount = useMemo(() => {
    let acum = 0;
    for (let i in state) {
      const { price } = products.find((prod) => prod.name === i);

      acum += state[i] * price;
    }
    return acum.toFixed(2);
  }, [state]);

  const getCounter = () => {
    if (!state) return "0";
    let count = 0;
    for (let elem in state) {
      count += state[elem];
    }
    return count;
  };

  const counter = getCounter();

  return (
    <CartContext.Provider
      value={{
        counter,
        dispatch,
        isModalOpen,
        products,
        setIsModalOpen,
        setProducts,
        state,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
