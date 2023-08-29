import React from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div>
      <ul className={styles.navigation}>
        <li>Home</li>
        <li>Attorneys</li>
        <li>Practice Areas</li>
        <li>About Us</li>
      </ul>
    </div>
  );
};

export default Navigation;
