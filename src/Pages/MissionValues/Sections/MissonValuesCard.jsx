import React from "react";
import styles from "../MissionValues.module.css";

const MissonValuesCard = ({ title, content }) => {
  return (
    <div className={styles.misson_values_card}>
      <div className={styles.misson_values_card_img}></div>
      <div className={styles.misson_values_card_content}>
        <h6>{title}</h6>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default MissonValuesCard;
