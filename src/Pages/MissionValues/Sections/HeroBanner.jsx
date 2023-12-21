import React from "react";
import styles from "../MissionValues.module.css";
import globeImage from "/assets/images/pngwingcom_4.png";

const HeroBanner = () => {
  return (
    <header className={styles.mission_hero_main}>
      <img src={globeImage} alt=""className={styles.globeImage} />

      <div className={styles.mission_hero_container}>
        <h6>Empowering Global Money Movement</h6>
        <h1>ENABLING SEAMLESS FINANCIAL MOBILITY WORLDWIDE</h1>
        <p>Instant, convenient, transparent and eventually free</p>
        <div className={styles.mission_hero_btns}>
          <button className={`yellow_btn_common`}>Learn more</button>
          <button className={`blue_blue_common_btn`}>
            Read our latest mission update
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeroBanner;
