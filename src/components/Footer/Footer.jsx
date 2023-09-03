import React from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/insta.png";
import pintrest from "../../assets/pinI.png";
import tw from "../../assets/twi.png";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerNavigate}>
        <Logo />
        <Navigation />
        <div className={styles.socialMedia}>
          <img src={instagram} alt="instagram" />
          <img src={facebook} alt="facebook" />
          <img src={tw} alt="tw" />
          <img src={pintrest} alt="pintrest" />
        </div>
      </div>
      <div className={styles.policy}>
        <div className={styles.policyText}>
          © 2020 Acme. All right reserved.
        </div>
        <div className={styles.policyText}>Privacy Policy</div>
        <div className={styles.policyText}>Terms of Service</div>
      </div>
    </div>
  );
};

export default Footer;
