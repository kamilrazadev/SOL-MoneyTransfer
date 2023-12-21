import React from "react";
import styles from "./Help.module.css";
import searchIcon from "/assets/images/magnifying-glass_2811806.png";
import { Link } from "react-router-dom";

const Help = () => {
  const helpCardsData = [
    {
      heading: "Sending Money",
      content: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua`,
    },
    {
      heading: "Manage account",
      content: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua`,
    },
    {
      heading: "Holding money",
      content: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua`,
    },
    {
      heading: "SOL Card",
      content: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua`,
    },
    {
      heading: "Receiving",
      content: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua`,
    },
    {
      heading: "SOL Business",
      content: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua`,
    },
  ];

  return (
    <main className={styles.help_main}>
      <div className={styles.help_container}>
        <h5>Hi, how can we help you?</h5>

        <div className={styles.search_container}>
          <div>
            <img src={searchIcon} alt="" />
          </div>
          <input type="text" placeholder="Search for topics" />
        </div>

        <div className={styles.login_container}>
          <h6>Log in for personalised support</h6>

          <button className={`${styles.login_btn} yellow_btn_common`}>
            Log in
          </button>

          <Link to="/">
            <h6 className={styles.trouble_login_link}>Trouble logging in ?</h6>
          </Link>
        </div>

        <div className={styles.help_cards_main}>
          <h5>Explore all topics</h5>
          <div className={styles.help_cards_container}>
            {helpCardsData.map((cardData, key) => (
              <div className={styles.help_card} key={key} data-aos="fade-up">
                <img src="#" alt="" />
                <h6>{cardData.heading}</h6>
                <p>“{cardData.content}”</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.help_bottom}>
          <h6>Still need help?</h6>
          <button className="blue_blue_common_btn">Contact us</button>
        </div>
      </div>
    </main>
  );
};

export default Help;
