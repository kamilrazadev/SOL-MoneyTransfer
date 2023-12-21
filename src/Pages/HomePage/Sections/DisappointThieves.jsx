import React from "react";
import styles from "../HomePage.module.css";
import shieldImage from "/assets/images/Layer_1_copy.png";
import govtHouse from "/assets/images/government_1582292.png";

const DisappointThieves = () => {
  return (
    <div className={styles.dissapoint_thieves_main}>
      <div className={styles.wrapper}>
        <div className={styles.dissapoint_thieves_container}>
          <div
            className={styles.dissapoint_thieves_txt}
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <h1 className={styles.heading_common}>DISAPPOINT THIEVES</h1>
            <p>
              At SOL Money Transfer, the security of your financial transactions
              is our top priority. We employ a multi-layered approach to ensure
              the utmost protection for your money and sensitive information.
              Our platform utilizes cutting-edge encryption technologies,
              safeguarding your data from unauthorized access. Additionally,
              stringent identity verification protocols are in place to
              authenticate each transaction, providing an extra layer of
              security. We regularly update our systems to stay ahead of
              emerging threats and comply with industry-leading security
              standards. With SOL, you can trust that your money is handled with
              the highest level of care and diligence, allowing you to transfer
              funds with confidence and peace of mind. Your financial security
              is our commitment.
            </p>
            <button>How we keep your money save</button>
          </div>
          <div
            className={styles.dissapoint_thieves_content}
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <img src={shieldImage} alt="" />
          </div>
        </div>
        <div className={styles.dissapoint_thieves_bottom}>
          <div>
            <div className={styles.dissapoint_thieves_bottom_img}>
              <img src={govtHouse} alt="" />
            </div>
            <p>
              Our dedicated fraud and security teams work to keep your money
              safe
            </p>
          </div>
          <div>
            <div className={styles.dissapoint_thieves_bottom_img}>
              <img src={govtHouse} alt="" />
            </div>
            <p>We use 2-factor authentication to protect your account</p>
          </div>
          <div>
            <div className={styles.dissapoint_thieves_bottom_img}>
              <img src={govtHouse} alt="" />
            </div>
            <p>We hold your money with established financial institutions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisappointThieves;
