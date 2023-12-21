import React from "react";
import styles from "../HomePage.module.css";
import teamMember from "/assets/images/our_team_img.jpg";

const OurTeam = () => {
  const teamMembers = [
    {
      profileImage: teamMember,
      firstName: "CARY",
      lastName: "ARTAC",
    },
    {
      profileImage: teamMember,
      firstName: "CARY",
      lastName: "ARTAC",
    },
    {
      profileImage: teamMember,
      firstName: "CARY",
      lastName: "ARTAC",
    },
  ];

  return (
    <div className={styles.our_team_main}>
      <div className={styles.wrapper}>
        <div className={styles.our_team_container}>
          <h1 className={styles.heading_common}>OUR TEAM</h1>

          <div className={styles.our_team_content}>
            <div className={styles.our_team_info_card_container}>
              {teamMembers.map((member, key) => (
                <div className={styles.our_team_info_card} key={key}>
                  <div
                    style={{ backgroundImage: `url(${member.profileImage})` }}
                    data-aos="zoom-in"
                  ></div>
                  <h4 data-aos="fade-up">
                    {member.firstName} <span>{member.lastName}</span>
                  </h4>
                </div>
              ))}
            </div>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
