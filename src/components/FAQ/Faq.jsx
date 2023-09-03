import React from "react";
import circle from "../../assets/circle.png";
import styles from "./Faq.module.css";
const Faq = () => {
  return (
    <div className={styles.faqWrapper}>
      <div className={styles.left}>
        <div className={styles.faqHeader}>FAQ</div>
        <div className={styles.leftText}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </div>
      </div>
      {/* <div className={styles.faqBody}> */}
      <div className={styles.right}>
        <div className={styles.rightHeading}>
          Do I need a personal injury report?
        </div>
        <div className={styles.rightText}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
          mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
          officia consequatduis enim velit mollit Exer.
        </div>
        <div className={styles.rightLine}></div>
        <div className={styles.rightpill}>
          <div className={styles.pillText}>How much is my case worth?</div>
          <div className={styles.pillWrapper}>
            <img src={circle} alt="icon" className={styles.pillImage} />
            <div className={styles.plusIcon}>+</div>
          </div>
        </div>
        <div className={styles.rightLine}></div>
        <div className={styles.rightpill}>
          <div className={styles.pillText}>
            What should I do right after car accidect
          </div>
          <div className={styles.pillWrapper}>
            <img src={circle} alt="icon" className={styles.pillImage} />
            <div className={styles.plusIcon}>+</div>
          </div>
        </div>
        <div className={styles.rightLine}></div>
        <div className={styles.rightpill}>
          <div className={styles.pillText}>How much is my case worth?</div>
          <div className={styles.pillWrapper}>
            <img src={circle} alt="icon" className={styles.pillImage} />
            <div className={styles.plusIcon}>+</div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Faq;
