import React from "react";

import eventIcon from "../assets/images/events-graphic.png";
import communityIcon from "../assets/images/community-graphic.png";
import devfest from "../assets/images/devfest-october-2020.png";
import heroImage from "../assets/images/dsc_hero_720.jpg";

import styles from "../styles/homepage-cards.module.css";
const HomePageCards = () => {
  return (
    <section className={styles.homePageCards}>
      <div className={`${styles.card} ${styles.card1}`}>
        <div className={styles.cardIcon}>
          <img src={eventIcon} alt="" />
        </div>
        <div className={styles.cardHeader}>
          <img src={devfest} alt="Events" />
        </div>
        <div className={styles.cardBody}>
          <h3>Events</h3>
          <p>
            Bringing developers together in-person and online. Stay in the know
            about upcoming events, catch up on content you missed, and connect
            with Google experts.
          </p>
          <button>See Events</button>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardIcon}>
          <img src={communityIcon} alt="" />
        </div>
        <div className={styles.cardHeader}>
          <img src={heroImage} alt="Commuinity" />
        </div>
        <div className={styles.cardBody}>
          <h3>Community</h3>
          <p>
            Connect with fellow developers and startups in your area, hear from
            industry experts, share your skills, and learn new ones.
          </p>
          <button>Find Commuinity</button>
        </div>
      </div>
    </section>
  );
};

export default HomePageCards;
