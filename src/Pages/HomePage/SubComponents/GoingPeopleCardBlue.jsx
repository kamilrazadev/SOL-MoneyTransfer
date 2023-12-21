import React from "react";
import styles from "../HomePage.module.css";
import cardFlagRounded from "/assets/images/pngwingcom_26.png";

const GoingPeopleCardBlue = () => {
  return (
    <div className={`${styles.going_places_card_main} ${styles.going_places_card_blue}`} data-aos="fade-up">
      <div>
        <img src={cardFlagRounded} alt="" />
        <p>
          <span>“</span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ea
          odio distinctio, doloremque id sapiente! Corporis ipsum illo voluptate
          <span>”</span>
        </p>
      </div>
      <button>Carry on Trustpilot</button>
    </div>
  );
};

export default GoingPeopleCardBlue;
