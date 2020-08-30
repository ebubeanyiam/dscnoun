import React from "react";
import { NavLink } from "react-router-dom";
import { MdDehaze } from "react-icons/md";

import lightHorizontalLogo from "../assets/images/DSC National Open University Of Nigeria Light Horizontal-Logo.png";
import styles from "../styles/header.module.css";

const Header = ({ user, setNavOpen, googleLogin, LogOut }) => {
  return (
    <nav className={styles.header}>
      <div
        className={styles.sidebarToggle}
        onClick={() => {
          setNavOpen(true);
        }}
      >
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
        {user ? (
          <button className={styles.login} onClick={LogOut}>
            Logout
          </button>
        ) : (
          <button className={styles.login} onClick={googleLogin}>
            Login
          </button>
        )}
      </div>

      {user && (
        <div className={styles.userThumbnail}>
          <img src={user.photoURL} alt="User thumbnail" />
        </div>
      )}
    </nav>
  );
};

export default Header;
