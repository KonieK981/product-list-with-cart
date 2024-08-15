import React from "react";
import styles from "./Gallery.module.css";
import Card from "../card/Card";

const Gallery = ({ products }) => {
  return (
    <div>
      <h1>Desserts</h1>
      <div className={styles.gallery}>
        {products.map((product) => (
          <Card key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
