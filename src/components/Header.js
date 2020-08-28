import React from "react";
import { Link, NavLink } from "react-router-dom";

import lightHorizontalLogo from "../assets/images/DSC National Open University Of Nigeria Light Horizontal-Logo.png";
import darkHorizontalLogo from "../assets/images/DSC National Open University Of Nigeria Dark Horizontal-Logo.png";
import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <nav>
      <div className={styles.logo}>
        <img
          className={styles.lightHorizontalLogo}
          src={lightHorizontalLogo}
          alt="DSC National Open University Of Nigeria Light Horizontal-Logo"
        />
        <img
          className={styles.darkHorizontalLogo}
          src={darkHorizontalLogo}
          alt="DSC National Open University Of Nigeria Light Horizontal-Logo"
        />
      </div>
      <div className={styles.siteNavWrapper}>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/communities">Communities</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </div>
      <div className={styles.signupLoginAuth}>
        <button className={styles.login}>Login</button>
      </div>
      <div className={styles.userThumbnail}></div>
    </nav>
  );
};

export default Header;
