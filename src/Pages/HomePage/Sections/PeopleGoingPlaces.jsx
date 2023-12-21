import React from "react";
import styles from "../HomePage.module.css";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import GoingPeopleCardWhite from "../SubComponents/GoingPeopleCardWhite";
import GoingPeopleCardBlue from "../SubComponents/GoingPeopleCardBlue";

const PeopleGoingPlaces = () => {
  return (
    <div className={styles.people_going_places_main}>
      <div className={styles.people_going_places_container}>
        <div className={styles.people_going_places_txt}>
          <h1 className={styles.heading_common}>FOR PEOPLE GOING PLACES </h1>

          <div className={styles.arrow_icons_container}>
            <div className={styles.people_going_places_arrow_icons}>
              <HiOutlineArrowNarrowLeft />
            </div>
            <div className={styles.people_going_places_arrow_icons}>
              <HiOutlineArrowNarrowRight />
            </div>
          </div>
        </div>
        <div className={styles.people_going_places_content}>
          <GoingPeopleCardWhite />
          <GoingPeopleCardBlue />
        </div>
      </div>
    </div>
  );
};

export default PeopleGoingPlaces;
