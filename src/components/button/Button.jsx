import { useCart } from "./../../hooks/useCart";
import styles from "./Button.module.css";

const Button = ({ children, stylesProp, id }) => {
  const { state, dispatch } = useCart();

  return (
    <button
      style={stylesProp}
      className={styles.btn}
      onClick={() => dispatch({ type: "increment", payload: id })}
    >
      {children}
    </button>
  );
};

export default Button;
