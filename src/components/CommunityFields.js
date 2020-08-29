import React from "react";
import Fields from "../static/fields";
import { Link } from "react-router-dom";

import styles from "../styles/community-fields.module.css";

const CommunityFields = () => {
  return (
    <div className={styles.communityFields}>
      <div className={styles.communityFieldsTitleText}>
        <h1>
          {" "}
          Become <span>part</span> of the community
        </h1>
      </div>

      <div className={styles.communityFieldsContainer}>
        {Fields.map((field) => {
          return (
            <div className={styles.field}>
              <div className={styles.fieldNameContainer}>
                <p>{field.fieldName}</p>
              </div>
              <div className={styles.fieldImageContainer}>
                <img src={field.fieldImage} alt="Field Icon" />
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.ctaContainer}>
        <Link to="/">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default CommunityFields;
