import React from "react";
import styles from "./TeamPill.module.css";

const TeamPil = ({ person, name, cases }) => {
  return (
    <div className={styles.pillWrapper}>
      <img src={person} alt={name} className={styles.pillImage} />
      <div className={styles.pillInfo}>
        <span className={styles.pillName}>{name}</span>
        <span className={styles.pillCases}>{cases}</span>
      </div>
    </div>
  );
};

export default TeamPil;
