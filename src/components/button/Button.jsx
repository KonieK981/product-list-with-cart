import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, stylesProp }) => {
  return <button style={stylesProp}>{children}</button>;
};

export default Button;
