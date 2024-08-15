import React from "react";
import styles from "./CardPanel.module.css";

const CardPanel = () => {
  return (
    <div className={styles.panel}>
      <button>-</button>
      <span>1</span>
      <button>+</button>
    </div>
  );
};

export default CardPanel;
