import React from "react";
import styles from "../HomePage.module.css";
import cardFlagRounded from "/assets/images/pngwingcom_26.png";

const GoingPeopleCardWhite = () => {
  return (
    <div className={styles.going_places_card_main} data-aos="fade-up">
      <div>
        <img src={cardFlagRounded} alt="" />
        <p>
          <span>“</span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ea
          odio distinctio, doloremque id sapiente! Corporis ipsum illo voluptate
          <span>”</span>
        </p>
      </div>
      <button>Madline on Trustpilot</button>
    </div>
  );
};

export default GoingPeopleCardWhite;
