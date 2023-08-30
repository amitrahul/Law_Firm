import React from "react";
import ellipse from "../../assets/Ellipse.png";
import Gift from "../../assets/gift.png";
import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.imageWrapper}>
        <img src={ellipse} alt="ellipse" className={styles.ellipse} />
        <img src={Gift} alt="gift" className={styles.gift} />
      </div>
      <div className={styles.cardHeading}>98% Success Rate</div>
      <p className={styles.cardText}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer.
      </p>
      <button className={styles.cardBtn}>Read More</button>
    </div>
  );
};

export default Card;
