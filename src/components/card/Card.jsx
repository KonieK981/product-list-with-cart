import Button from "../button/Button";
import styles from "./Card.module.css";
import CardPanel from "./../card-panel/CardPanel";

const Card = ({ product }) => {
  const color = "white";
  const cardStyle = {
    backgroundImage: `url(${product.image.desktop})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "10px",
    paddindBottom: "1rem",
    height: "145px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const btnStyles = { backgroundColor: "transparent", border: "none" };

  return (
    <div className={styles.card}>
      <div style={cardStyle} className={styles.cover}>
        <div className={styles.bottomSide} style={{ backgroundColor: color }}>
          {/* <Button stylesProp={btnStyles}>Add to Cart</Button> */}
          <CardPanel />
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
