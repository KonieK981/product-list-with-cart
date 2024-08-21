import Button from "../button/Button";
import styles from "./Card.module.css";
import CardPanel from "./../card-panel/CardPanel";
import AddToCart from "./../icons/AddToCart";
import { useCart } from "../../hooks/useCart";
import { colors } from "./../../values/colors";
import { useState } from "react";
import { useResponsiveImg } from "../../hooks/useResponsiveImg";

const Card = ({ product }) => {
  const [isHover, setIsHover] = useState(false);
  const { state, dispatch } = useCart();
  const { src } = useResponsiveImg();

  const active = state[product.name];

  const cardStyle = {
    // backgroundImage: `url(${product.image[src]})`,
    backgroundImage: `url("/assets/images/favicon-32x32.png")`,
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
