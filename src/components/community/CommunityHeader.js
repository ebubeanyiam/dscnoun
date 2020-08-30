import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./styles/community-header.module.css";
const CommunityHeader = () => {
  return (
    <div className={styles.NavWrapper}>
      <NavLink to="/community" exact activeClassName={styles.active}>
        About
      </NavLink>
      <NavLink to="/community/club" activeClassName={styles.active}>
        Club
      </NavLink>
      <NavLink to="/community/leads" activeClassName={styles.active}>
        Leads
      </NavLink>
      <NavLink to="/community/guidelines" activeClassName={styles.active}>
        Community Guidelines
      </NavLink>
      <NavLink
        to="/community/solution-challenge"
        activeClassName={styles.active}
      >
        Solution Challenge
      </NavLink>
    </div>
  );
};

export default CommunityHeader;
