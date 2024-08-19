import styles from "./CartItem.module.css";
import Remove from "./../icons/Remove";

const CartItem = ({ count, price, name }) => {
  return (
    <li className={styles.itemCart}>
      <div className={styles.infoCart}>
        <h5> {name}</h5>
        <div>
          <span className={styles.counter}>{count}x</span>
          <span className={styles.price}>@ ${price}</span>
          <span className={styles.ammount}>${price * count}</span>
        </div>
      </div>
      <div className={styles.iconCart}>
        <div className={styles.circle}>
          <Remove />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
