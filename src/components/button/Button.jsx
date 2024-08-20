import styles from "./Button.module.css";
import { useState } from "react";
import { colors } from "./../../values/colors";

const Button = ({ children, type, stylesProp, handleClick }) => {
  const [isHover, setIsHover] = useState(false);

  const propValue =
    type === "filled" && isHover
      ? {
          backgroundColor: colors["red-strong"],
        }
      : type === "outline" && isHover
      ? {
          color: colors["red"],
        }
      : {};

  const stylesBtn = { ...stylesProp, ...propValue };

  return (
    <button
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={stylesBtn}
      className={styles.btn}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
