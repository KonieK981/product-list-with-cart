import styles from "./OrderModal.module.css";
import { useCart } from "../../hooks/useCart";
import data from "../../../data.json";
import Button from "./../button/Button";
import { colors } from "./../../values/colors";
import OrderItem from "./order-item/OrderItem";
import Check from "./../icons/Check";
import { useRef } from "react";
import { useOutsideClick } from "./../../hooks/useOutSideClick";

const btnStyles = {
  backgroundColor: colors["red"],
  color: colors["white"],
  width: "100%",
  borderRadius: "20px",
  padding: "1rem",
  filter: "1px",
};

const OrderModal = () => {
  const { state, totalAmount, setIsModalOpen, dispatch } = useCart();
  const { isModalOpen } = useCart();
  const modalRef = useRef(null);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleReset = () => {
    console.log("first");
    dispatch({ type: "reset" });
    setIsModalOpen(false);
  };

  useOutsideClick(modalRef, isModalOpen, handleClose);

  if (!isModalOpen) return null;

  return (
    <div className={styles.orderContainer} ref={modalRef}>
      <div className={styles.order}>
        <div className={styles.header}>
          <Check />
          <h2>Order Confirmed</h2>
          <p>We hope you enjoy your food!</p>
        </div>

        <div className={styles.itemsContainer}>
          {Object.keys(state).map((item) => {
            const prod = data.find((el) => el.name == item);

            return (
              <OrderItem
                key={item}
                count={state[item]}
                price={prod.price}
                name={prod.name}
                img={prod.image.thumbnail}
              />
            );
          })}
          <div className={styles.order__footer}>
            <span>Order Total</span>
            <span>${totalAmount}</span>
          </div>
        </div>
        <div>
          <Button
            type="filled"
            stylesProp={btnStyles}
            handleClick={handleReset}
          >
            Start New Order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
