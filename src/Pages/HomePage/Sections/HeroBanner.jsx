import React from "react";
import styles from "../HomePage.module.css";
import solLogoHero from "/assets/images/Yellow_Transparent@2x.png";
import { Link } from "react-scroll";

const HeroBanner = () => {
  return (
    <div className={styles.hero_banner_main}>
      <Link
        id={styles.hero_scroll_btn}
        to="moneyTransferForm"
        smooth={true}
        duration={500}
      >
        {/* <svg className={styles.Ellipse_up}>
          <ellipse
            id={styles.Ellipse_up}
            rx="20"
            ry="20"
            cx="5"
            cy="40"
          ></ellipse>
        </svg>
        <svg className={styles.Polygon_up} viewBox="30 -12 28 22">
          <path
            id={styles.Polygon_up_yellow}
            d="M 9.999999046325684 0 L 20 18 L 0 18 Z"
          ></path>
        </svg> */}

        <svg className={styles.Ellipse_down}>
          <ellipse
            id={styles.Ellipse_down}
            rx="20"
            ry="20"
            cx="5"
            cy="10"
          ></ellipse>
        </svg>
        <svg className={styles.Polygon_down} viewBox="-38 -30 28 22">
          <path
            id={styles.Polygon_down_yellow}
            d="M 9.999999046325684 0 L 20 18 L 0 18 Z"
          ></path>
        </svg>
      </Link>
      {/* <Link to="moneyTransferForm" smooth={true} duration={500}>
        Scroll to Money Transfer Form
      </Link> */}
      <div className={styles.hero_banner_headings} data-aos="zoom-out">
        <h1>CONNTECTING</h1>
        <h1>Latin America</h1>
      </div>
      <div className={styles.hero_banner_logo}>
        <div>
          <img src={solLogoHero} alt="" data-aos="zoom-out" />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
