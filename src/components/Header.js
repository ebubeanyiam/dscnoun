import React from "react";
import { NavLink } from "react-router-dom";
import { MdDehaze } from "react-icons/md";
import { auth, db, provider } from "../firebase/config";

import lightHorizontalLogo from "../assets/images/DSC National Open University Of Nigeria Light Horizontal-Logo.png";
import styles from "../styles/header.module.css";

const Header = ({ user }) => {
  const googleLogin = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        const userRef = db.collection("users").doc(res.user.uid);
        if (userRef) {
          db.collection("users").doc(res.user.uid).set({
            name: res.user.displayName,
            photoUrl: res.user.photoURL,
            email: res.user.email,
          });
        }
        localStorage.setItem("userID", res.user.uid);
        localStorage.setItem("userphotoUrl", res.user.photoURL);
        localStorage.setItem("userFullName", res.user.displayName);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const LogOut = () => {
    auth.signOut();
  };

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
