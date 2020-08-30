import React from "react";
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";

import styles from "../styles/sidebar.module.css";
import lightHorizontalLogo from "../assets/images/DSC National Open University Of Nigeria Light Horizontal-Logo.png";

const Sidebar = ({ user, navOpen, setNavOpen, googleLogin, LogOut }) => {
  if (!navOpen) {
    return null;
  } else {
    return (
      <div
        className={`${styles.sidebarContainer} sidebarContainer`}
        onClick={(e) => {
          e.target.classList.contains("sidebarContainer") && setNavOpen(false);
        }}
      >
        <div className={styles.sidebar}>
          <div className={styles.logo}>
            <div
              className={styles.sidebarClose}
              onClick={() => {
                setNavOpen(false);
              }}
            >
              <MdClose />
            </div>
            <img
              src={lightHorizontalLogo}
              alt="DSC National Open University Of Nigeria Light Horizontal-Logo"
            />
          </div>
          <div className={styles.siteNavWrapper}>
            <ul>
              <li>
                <NavLink to="/products">Products</NavLink>
              </li>
              <li>
                <NavLink to="/events">Events</NavLink>
              </li>
              <li>
                <NavLink to="/communities">Communities</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
            </ul>
          </div>

          <div className={styles.userAuth}>
            {user ? (
              <button onClick={LogOut}>Logout</button>
            ) : (
              <button onClick={googleLogin}>Login</button>
            )}
            {user && <img src={user.photoURL} alt="User thumbnail" />}
          </div>
        </div>
      </div>
    );
  }
};

export default Sidebar;
