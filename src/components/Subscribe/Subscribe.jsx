import React from "react";
import styles from "./Subscribe.module.css";

const Subscribe = () => {
  return (
    <div className={styles.subscribeWrapper}>
      <div className={styles.subscribeHeader}>Subscribe Our Newsletter</div>
      <div className={styles.formSection}>
        <div className={styles.formfield}>
          <span className={styles.formText}>Name : </span>
        </div>
        <div className={styles.formfield}>
          <span className={styles.formText}>Enter your Email</span>
        </div>
        <div className={styles.sendBtn}>
          <span className={styles.btnText}>SEND</span>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
