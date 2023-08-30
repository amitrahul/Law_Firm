import React from "react";
import Card from "../Card/Card";
import styles from "./CardSection.module.css";

const CardSection = () => {
  return (
    <div className={styles.CardsWrapper}>
      <div className={styles.heading}>Why Choose us?</div>
      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardSection;
