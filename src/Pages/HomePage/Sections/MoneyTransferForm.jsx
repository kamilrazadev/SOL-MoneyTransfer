import React from "react";
import styles from "../HomePage.module.css";
import flagPakistan from "/assets/images/icons8-pakistan-48.png";
import arrowIcon from "/assets/images/icons8-arrow-50_dv.png";

const MoneyTransferForm = () => {
  return (
    <section className={styles.money_transfer_main} id="moneyTransferForm">
      <div className={styles.wrapper}>
        <div className={styles.money_transfer_container}>
          <div className={styles.money_transfer_form} data-aos="fade-right">
            <div className={styles.form_field}>
              <p>You Send</p>
              <div>
                <input type="text" />
                <div>
                  <img src={flagPakistan} alt="" />
                  <p>PKR</p>
                  <img src={arrowIcon} alt="" className={styles.arrow_icon} />
                </div>
              </div>
            </div>
            <div className={styles.form_field}>
              <p>Recipient Gets</p>
              <div>
                <input type="text" />
                <div>
                  <img src={flagPakistan} alt="" />
                  <p>PKR</p>
                  <img src={arrowIcon} alt="" className={styles.arrow_icon} />
                </div>
              </div>
            </div>
            <div className={styles.form_btn}>
              <button>Compare Price</button>
              <button>Get Started</button>
            </div>
          </div>
          <div className={styles.money_transfer_txt} data-aos="fade-left">
            <h4>MAKE YOUR MONEY MOVE, FAST</h4>
            <h2>
              Send to 70+ countries, fast. Free from hidden fees and exchange
              rate markups
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoneyTransferForm;
