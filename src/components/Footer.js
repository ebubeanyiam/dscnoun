import React from "react";
import { Link } from "react-router-dom";

import lightHorizontalLogo from "../assets/images/DSC National Open University Of Nigeria Light Vertical-Logo.png";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer>
      <nav className={styles.footerLinksBox}>
        <ul className={styles.footerLinks}>
          <li className={styles.footerLinkItem}>
            <h3>Connect</h3>
            <ul className={styles.links}>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </li>

          <li className={styles.footerLinkItem}>
            <h3>Programs</h3>
            <ul className={styles.links}>
              <li>100 days of Code</li>
              <li>Web Dev for Newbies</li>
              <li>Dsc Noun Solution challenge</li>
            </ul>
          </li>

          <li className={styles.footerLinkItem}>
            <h3>Sites</h3>
            <ul className={styles.links}>
              <li>Memoire.com</li>
              <li>Scinuggets.xyz</li>
            </ul>
          </li>
        </ul>
      </nav>

      <div className={styles.footerLogo}>
        <img
          src={lightHorizontalLogo}
          alt="DSC National Open University Of Nigeria Light Horizontal-Logo"
        />
      </div>

      <div className={styles.bottomFooter}>
        <section>
          <Link to="">Terms</Link>
          <Link to="">Privacy</Link>
        </section>

        <section>
          <p>Sign up for the Developers Student Club newsletter</p>
          <button>Subscribe</button>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
