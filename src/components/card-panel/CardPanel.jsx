import styles from "./CardPanel.module.css";
import { useCart } from "../../hooks/useCart";

import DecrementQuantity from "./../icons/DecrementQuantity";
import IncrementQuantity from "./../icons/IncrementQuantity";

const CardPanel = ({ id }) => {
  const { state, dispatch } = useCart();

  return (
    <div className={styles.panel}>
      <button onClick={() => dispatch({ type: "increment", payload: id })}>
        <IncrementQuantity />
      </button>
      <span>{state[id]}</span>
      <button onClick={() => dispatch({ type: "decrement", payload: id })}>
        <DecrementQuantity />
      </button>
    </div>
  );
};

export default CardPanel;
