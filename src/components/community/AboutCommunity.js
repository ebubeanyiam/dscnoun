import React from "react";

import heroImage from "../../assets/images/dsc_hero_720.jpg";
import styles from "./styles/about-community.module.css";
const AboutCommunity = () => {
  return (
    <div>
      <div className={styles.landing}>
        <div className={styles.landingText}>
          <h1>Developers Student Club, National Open University</h1>
          <h4>
            Aiming to bring <span>students</span> closer to <span>tech</span>{" "}
            whilst making an <span>impact</span> in the <span>society</span>
          </h4>
          <p>
            Developer Student Clubs are university based community groups for
            students interested in Google developer technologies. Students from
            all undergraduate or graduate programs with an interest in growing
            as a developer are welcome. By joining a DSC, students grow their
            knowledge in a peer-to-peer learning environment and build solutions
            for local businesses and their community.
          </p>
          <section>
            <button>Find a community</button>
            <button>Become a core team member</button>
          </section>
        </div>
        <div className={styles.landingImage}>
          <img src={heroImage} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default AboutCommunity;
