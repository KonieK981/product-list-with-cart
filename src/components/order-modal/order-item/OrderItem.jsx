import styles from "./OrderItem.module.css";

const OrderItem = ({ count, price, name, img }) => {
  return (
    <li className={styles.itemCart}>
      <img src={img} alt="order image" />
      <div className={styles.infoCart}>
        <h5> {name}</h5>
        <div>
          <span className={styles.counter}>{count}x</span>
          <span className={styles.price}>@ ${price}</span>
        </div>
      </div>
      <div className={styles.iconCart}>
        <span className={styles.ammount}>${price * count}</span>
      </div>
    </li>
  );
};

export default OrderItem;
