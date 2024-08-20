import Button from "../button/Button";
import styles from "./Card.module.css";
import CardPanel from "./../card-panel/CardPanel";
import AddToCart from "./../icons/AddToCart";
import { useCart } from "../../hooks/useCart";
import { colors } from "./../../values/colors";
import { useState } from "react";

const Card = ({ product }) => {
  const { state, dispatch } = useCart();
  const [isHover, setIsHover] = useState(false);

  const active = state[product.name];

  const cardStyle = {
    backgroundImage: `url(${product.image.desktop})`,
    outline: active ? `2px solid ${colors["red"]}` : "none",
  };

  const btmStyles = {
    backgroundColor: !active ? "white" : colors["red"],
    border:
      !active && isHover
        ? `2px solid ${colors["red"]}`
        : !active
        ? `2px solid ${colors["rose-300"]}`
        : "none",
  };

  return (
    <div className={styles.card}>
      <div style={cardStyle} className={styles.cover}>
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className={styles.bottomSide}
          style={btmStyles}
        >
          {!active ? (
            <Button
              type="outline"
              id={product.name}
              handleClick={() =>
                dispatch({ type: "increment", payload: product.name })
              }
            >
              <AddToCart />
              Add to Cart
            </Button>
          ) : (
            <CardPanel id={product.name} />
          )}
        </div>
      </div>
      <div className={styles.footer}>
        <span className={styles.blurText}>{product.category}</span>
        <span className={styles.strongText}>{product.name}</span>
        <span className={styles.price}>${product.price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Card;
