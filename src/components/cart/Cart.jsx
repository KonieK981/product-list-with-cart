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
  borderRadius: "20px",
  color: colors["white"],
  filter: "1px",
  padding: ".8rem",
  width: "100%",
};

const Cart = () => {
  const { state, counter, totalAmount, setIsModalOpen } = useCart();

  return (
    <div className={styles.cart}>
      <div className={styles.innerCart}>
        <h3>
          Your Cart <span>({counter})</span>
        </h3>
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
              <span>${totalAmount}</span>
            </div>
            <div className={styles.cart__footer_middle}>
              <p>
                <CarbonNeutral />
                This is a <b>carbon-neutral</b> delivery
              </p>
            </div>
            <Button
              type="filled"
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
