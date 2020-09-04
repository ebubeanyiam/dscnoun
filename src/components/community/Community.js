import React from "react";
import Disclaimer from "../Disclaimer";
import AboutCommunity from "./AboutCommunity";
import CommunityClubs from "./CommunityClubs";
import CommunityHeader from "./CommunityHeader";

import styles from "./styles/community.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Community = () => {
  return (
    <Router>
      <div className={styles.community}>
        <CommunityHeader />
        <Disclaimer />
        <Switch>
          <Route path="/community" exact component={AboutCommunity} />
          <Route path="/community/club" component={CommunityClubs} />
        </Switch>
      </div>
    </Router>
  );
};

export default Community;
