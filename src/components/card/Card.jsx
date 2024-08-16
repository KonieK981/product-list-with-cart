import Button from "../button/Button";
import styles from "./Card.module.css";
import CardPanel from "./../card-panel/CardPanel";
import AddToCart from "./../icons/AddToCart";
import { useCart } from "../../hooks/useCart";
import { colors } from "./../../values/colors";

const Card = ({ product }) => {
  const { state, dispatch } = useCart();

  const active = state[product.name];

  const cardStyle = {
    backgroundImage: `url(${product.image.desktop})`,
    border: active ? `2px solid ${colors["red"]}` : "none",
  };

  const btmStyles = {
    backgroundColor: !active ? "white" : colors["red"],
    border: !active ? `1px solid ${colors["rose-300"]}` : "none",
  };

  return (
    <div className={styles.card}>
      <div style={cardStyle} className={styles.cover}>
        <div className={styles.bottomSide} style={btmStyles}>
          {!active ? (
            <Button id={product.name}>
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
        <span className={styles.price}>${product.price}</span>
      </div>
    </div>
  );
};

export default Card;
