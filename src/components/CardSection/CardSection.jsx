import React from "react";
import Card from "../Card/Card";
import styles from "./CardSection.module.css";

const CardSection = () => {
  const successRate = "98% Success Rate";
  const fullSuccessRate = "100% Success Rate";

  return (
    <div className={styles.CardsWrapper}>
      <div className={styles.heading}>Why Choose us?</div>
      <div className={styles.cards}>
        <Card successRate={successRate} />
        <Card successRate={fullSuccessRate} />
        <Card successRate={fullSuccessRate} />
      </div>
    </div>
  );
};

export default CardSection;
