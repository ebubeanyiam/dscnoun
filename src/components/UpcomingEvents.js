import React from "react";

import styles from "../styles/upcoming-events.module.css";

import eventImage from "../assets/images/devfest-october-2020.png";

const UpcomingEvents = () => {
  return (
    <div className={styles.event}>
      <div className={styles.eventImageContainer}>
        <img
          className={styles.eventImage}
          src={eventImage}
          alt="Upcoming Event"
        />
      </div>
      <div className={styles.eventDescContainer}>
        <p className={styles.eventDesc}>
          Save the date for DevFest 2020, October 16-18!. This year, developer
          communities all around the world will come together in a whole new way
          — virtually over one weekend to connect and learn about Google
          technologies. We can't wait to share more.
        </p>
      </div>
    </div>
  );
};

export default UpcomingEvents;
