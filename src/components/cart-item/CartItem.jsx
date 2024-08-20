import styles from "./CartItem.module.css";
import Remove from "./../icons/Remove";
import { useCart } from "../../hooks/useCart";

const CartItem = ({ count, price, name }) => {
  const { dispatch } = useCart();

  return (
    <li className={styles.itemCart}>
      <div className={styles.infoCart}>
        <h5> {name}</h5>
        <div>
          <span className={styles.counter}>{count}x</span>
          <span className={styles.price}>@ ${price.toFixed(2)}</span>
          <span className={styles.ammount}>${(price * count).toFixed(2)}</span>
        </div>
      </div>
      <div className={styles.iconCart}>
        <button
          onClick={() => dispatch({ type: "remove-product", payload: name })}
        >
          <div className={styles.circle}>
            <Remove />
          </div>
        </button>
      </div>
    </li>
  );
};

export default CartItem;
