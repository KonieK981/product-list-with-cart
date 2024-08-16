import { useCart } from "./../../hooks/useCart";

const Button = ({ children, stylesProp, id }) => {
  const { state, dispatch } = useCart();

  return (
    <button
      style={stylesProp}
      onClick={() => dispatch({ type: "increment", payload: id })}
    >
      {children}
    </button>
  );
};

export default Button;
