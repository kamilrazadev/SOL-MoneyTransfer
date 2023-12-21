import React from "react";
import styles from "../HomePage.module.css";
import flagPakistan from "/assets/images/icons8-pakistan-48.png";
import arrowIcon from "/assets/images/icons8-arrow-50_dv.png";
import globe from "/assets/images/pngwingcom_4.png";

const MoneyTransferForm = () => {
  return (
    <section
      className={styles.international_money_transfer_main}
      id="moneyTransferForm"
    >
      <div className={styles.wrapper}>
        <div className={styles.international_money_transfer_container}>
          <div
            className={styles.international_money_transfer_txt}
            data-aos="fade-right"
          >
            <h3 className={styles.sub_heading}>
              Empowering Global Money Movement
            </h3>{" "}
            <h1 className={styles.heading_common}>
              <span className={styles.small_heading_common}>INTERNATIONAL</span>{" "}
              MONEY TRANSFER
            </h1>
          </div>

          <div
            className={styles.international_money_transfer_form}
            data-aos="fade-left"
          >
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

            <div className={styles.our_fee}>
              <ul>
                <li className={styles.our_free_li}>
                  <p>1.30 USD</p>
                  <p>Total amount connect</p>
                </li>
                <li className={styles.our_free_li}>
                  <p>1.30 USD</p>
                  <p>Total amount connect</p>
                </li>
                <li className={styles.our_free_li}>
                  <p>1.30 USD</p>
                  <p>Total amount connect</p>
                </li>
                <li className={styles.our_free_li}>
                  <p>1.30 USD</p>
                  <p>Total amount connect</p>
                </li>
                <li className={styles.our_free_li}>
                  <p>1.30 USD</p>
                  <p>Total amount connect</p>
                </li>
              </ul>
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
        </div>
      </div>

      <img
        data-aos="fade-in"
        src={globe}
        alt=""
        className={styles.international_money_transfer_globe}
      />
    </section>
  );
};

export default MoneyTransferForm;
