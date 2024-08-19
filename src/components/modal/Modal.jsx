import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

export default function Modal({ children }) {
  const modalRoot = document.getElementById("modal-root");

  if (!modalRoot) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={styles.modal_backdrop}>
      <div className={styles.modal}>{children}</div>
    </div>,
    modalRoot
  );
}
