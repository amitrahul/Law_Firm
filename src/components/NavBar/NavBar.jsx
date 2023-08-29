import React from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import styles from "./Navbar.module.css";

import Button from "../Button/Button";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <Logo />
      <Navigation />
      <Button Children={"Contact Now"} />
    </div>
  );
};

export default NavBar;
