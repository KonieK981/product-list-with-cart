import styles from "./EmptyCart.module.css";
import IlustrationEmpty from "./../icons/IlustrationEmpty";

const EmptyCart = () => {
  return (
    <article className={styles.empty}>
      <div>
        <IlustrationEmpty />
      </div>
      <p>Your added items will appear here</p>
    </article>
  );
};

export default EmptyCart;
