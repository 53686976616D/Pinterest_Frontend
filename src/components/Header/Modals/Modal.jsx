import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ children, setIsOpen }) => {
  return (
    <div className={styles.bg} onClick={() => setIsOpen(false)}>
      <div className={styles.center}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  );
};

const Modal2 = ({ children, setIsOpen }) => {
  return (
    <div className={styles.bg} onClick={() => setIsOpen(false)}>
      <div className={styles.center2}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  );
};

export { Modal, Modal2 };
