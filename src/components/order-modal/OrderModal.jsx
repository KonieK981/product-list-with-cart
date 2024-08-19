import styles from "./OrderModal.module.css";
import { useCart } from "../../hooks/useCart";
import EmptyCart from "../empty-cart/EmptyCart";
import data from "../../../data.json";
import Button from "./../button/Button";
import { colors } from "./../../values/colors";
import OrderItem from "./order-item/OrderItem";
import Check from "./../icons/Check";
import { useEffect, useRef } from "react";

const btnStyles = {
  backgroundColor: colors["red"],
  color: colors["white"],
  width: "100%",
  borderRadius: "20px",
  padding: "1rem",
  filter: "1px",
};

const OrderModal = () => {
  const { state, setIsModalOpen } = useCart();
  const { isModalOpen } = useCart();
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen, setIsModalOpen]); // added dependencies to useEffect

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
            <span>$46.50</span>
          </div>
        </div>

        <Button stylesProp={btnStyles} onClick={() => setIsModalOpen(true)}>
          Start New Order
        </Button>
      </div>
    </div>
  );
};

export default OrderModal;
