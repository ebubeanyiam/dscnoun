import React from "react";
import { NavLink } from "react-router-dom";
import { MdDehaze } from "react-icons/md";

import lightHorizontalLogo from "../assets/images/DSC National Open University Of Nigeria Light Horizontal-Logo.png";
import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.sidebarToggle}>
        <MdDehaze />
      </div>
      <div className={styles.logo}>
        <img
          className={styles.lightHorizontalLogo}
          src={lightHorizontalLogo}
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
