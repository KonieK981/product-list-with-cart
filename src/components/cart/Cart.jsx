import styles from "./Cart.module.css";
import { useCart } from "../../hooks/useCart";
import EmptyCart from "../empty-cart/EmptyCart";
import data from "../../../data.json";
import CartItem from "../cart-item/CartItem";
import Button from "./../button/Button";
import CarbonNeutral from "./../icons/CarbonNeutral";
import { colors } from "./../../values/colors";

const btnStyles = {
  backgroundColor: colors["red"],
  color: colors["white"],
  width: "100%",
  borderRadius: "20px",
  padding: "1rem",
  filter: "1px",
};

const Cart = () => {
  const { state, setIsModalOpen } = useCart();

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
    <div className={styles.cart}>
      <div className={styles.innerCart}>
        <h3>Your Cart({counter})</h3>
        {counter <= 0 ? (
          <EmptyCart />
        ) : (
          Object.keys(state).map((item) => {
            const prod = data.find((el) => el.name == item);

            return (
              <CartItem
                key={item}
                count={state[item]}
                price={prod?.price}
                name={prod?.name}
              />
            );
          })
        )}
        {counter > 0 && (
          <div className={styles.cart__footer}>
            <div className={styles.order}>
              <span>Order Total</span>
              <span>$46.50</span>
            </div>
            <div className={styles.cart__footer_middle}>
              <p>
                <CarbonNeutral />
                This is a <b>carbon-neutral</b> delivery
              </p>
            </div>
            <Button
              stylesProp={btnStyles}
              handleClick={() => setIsModalOpen(true)}
            >
              Confirm Order
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
