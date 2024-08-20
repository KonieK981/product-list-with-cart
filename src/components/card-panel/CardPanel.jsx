import styles from "./CardPanel.module.css";
import { useCart } from "../../hooks/useCart";

import DecrementQuantity from "./../icons/DecrementQuantity";
import IncrementQuantity from "./../icons/IncrementQuantity";

const CardPanel = ({ id }) => {
  const { state, dispatch } = useCart();

  return (
    <div className={styles.panel}>
      <button onClick={() => dispatch({ type: "decrement", payload: id })}>
        <div className={styles.circle}>
          <DecrementQuantity />
        </div>
      </button>
      <div className={styles.indicator}>{state[id]}</div>
      <button onClick={() => dispatch({ type: "increment", payload: id })}>
        <div className={styles.circle}>
          <IncrementQuantity />
        </div>
      </button>
    </div>
  );
};

export default CardPanel;
