import React from "react";
import styles from "./Button.module.css";

const Button = ({ Children, name }) => {
  return <button className={styles.btn}>{Children}</button>;
};

export default Button;
