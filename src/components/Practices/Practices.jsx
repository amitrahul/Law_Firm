import React from "react";
import styles from "./Practices.module.css";
import business from "../../assets/business.png";
import partnership from "../../assets/Partnership.png";
import business1 from "../../assets/business1.png";
import elder from "../../assets/elder.png";
import landlord from "../../assets/landlord.png";
import realEstate from "../../assets/realEstate.png";
const Practices = () => {
  return (
    <div className={styles.practiceWrapper}>
      <div className={styles.practiceHeading}>Area of Practices</div>
      <div className={styles.imageWrapper}>
        <div className={styles.image}>
          <img src={business} alt="business" />
          <span className={styles.imageText}>BUSINESS LAW</span>
        </div>
        <div className={styles.image}>
          <img src={partnership} alt="partnership" />
          <span className={styles.imageText}>Partnership LAW</span>
        </div>

        <div className={styles.image}>
          <img src={realEstate} alt="business" />
          <span className={styles.imageText}>REAL ESTATE LAW</span>
        </div>
        <div className={styles.image}>
          <img src={business1} alt="business" />
          <span className={styles.imageText}>BUSINESS LAW</span>
        </div>
        <div className={styles.image}>
          <img src={landlord} alt="business" />
          <span className={styles.imageText}>LANDLORD DISPUTES</span>
        </div>
        <div className={styles.image}>
          <img src={elder} alt="business" />
          <span className={styles.imageText}>ELDER ABUSE</span>
        </div>
      </div>
    </div>
  );
};

export default Practices;
