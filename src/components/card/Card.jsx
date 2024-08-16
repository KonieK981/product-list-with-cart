import Button from "../button/Button";
import styles from "./Card.module.css";
import CardPanel from "./../card-panel/CardPanel";
import AddToCart from "./../icons/AddToCart";
import { useCart } from "../../hooks/useCart";
import { colors } from "./../../values/colors";

const Card = ({ product }) => {
  const { state, dispatch } = useCart();

  const active = state[product.name];
  const color = !active ? "white" : colors["red"];

  const cardStyle = {
    backgroundImage: `url(${product.image.desktop})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "10px",
    paddindBottom: "1rem",
    height: "145px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const btnStyles = {
    backgroundColor: "transparent",
    border: "none",
  };

  return (
    <div className={styles.card}>
      <div style={cardStyle} className={styles.cover}>
        <div className={styles.bottomSide} style={{ backgroundColor: color }}>
          {!active ? (
            <Button stylesProp={btnStyles} id={product.name}>
              <AddToCart />
              Add to Cart
            </Button>
          ) : (
            <CardPanel id={product.name} />
          )}
        </div>
      </div>
      <div className={styles.footer}>
        <span className="blur-text">{product.category}</span>
        <span className="strong-text">{product.name}</span>
        <span className="price">${product.price}</span>
      </div>
    </div>
  );
};

export default Card;
