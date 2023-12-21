import React from "react";
import styles from "../CountriesWeCover.module.css";
import solLogoHero from "/assets/images/Yellow_Transparent@2x.png";

const CountriesWeCover = () => {
  return (
    <div className={styles.hero_banner_main}>
      <div className={styles.hero_banner_headings} data-aos="zoom-out">
        <h1>SOL NEAR WORKS EVERYWHERE IN UNITED STATES</h1>
      </div>
      <div className={styles.hero_banner_logo}>
        <div>
          <img src={solLogoHero} alt="" data-aos="zoom-out" />
        </div>
      </div>
    </div>
  );
};

export default CountriesWeCover;
