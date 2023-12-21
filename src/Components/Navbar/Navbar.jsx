import React from "react";
import styles from "./Navbar.module.css";
import solLogo from "/assets/images/SOL_Logo.png";
import helpIcon from "/assets/images/Help_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const showNavbar = () => {
    const navBar = document.getElementById("nav-bar");
    navBar.style.right = "0";
  };

  const closeNavbar = () => {
    const navBar = document.getElementById("nav-bar");
    navBar.style.right = "100%";
  };

  return (
    <>
      <div className={styles.header} id="header">
        <div className={styles.white_rectangle}>
          <div className={styles.header_icons}>
            {/* Help Icon */}
            <a href="/help" className={styles.help_link}>
              <img src={helpIcon} alt="Help Icon" height={80} width={80} />
              <span className={styles.help_text}>Help</span>
            </a>
            {/* Logo */}
            <div className={styles.SOL_Logo} id="SOL_Logo">
              <a href="/">
                <img src={solLogo} alt="Logo" height={117} width={96} />
              </a>
            </div>
          </div>
          <div id={styles.sign_in}>
            <button className={styles.sign_in_button}>SIGN IN</button>
            <button className={styles.join_now_button}>JOIN NOW</button>
          </div>
        </div>
        {/* Yellow Rectangle */}
        <div className={styles.yellow_rectangle} />
      </div>

      <span className={styles.menu_bars} onClick={showNavbar}>
        <div></div>
        <div></div>
        <div></div>
      </span>

      <nav className={styles.nav_responsive} id="nav-bar">
        <div className={styles.nav_responsive_links}>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <ul>
                <h3>ABOUT US</h3>
                <a href="#">Company Overview</a>
                <a href="#">Mission & Values</a>
                <a href="#">Our Team</a>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <ul>
                <h3>SERVICES</h3>
                <a href="#">Online Payments</a>
                <a href="#">Money Transfers</a>
                <a href="#">Pre-Paid Services</a>
                <a href="#">Check Cashing</a>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <ul>
                <h3>RESOURCES</h3>
                <a href="#">FAQ's</a>
                <a href="#">Coverage</a>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <ul>
                <h3>CONTACT US</h3>
                <a href="#">+21 345 6789</a>
                <a href="#"></a>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.nav_responsive_bottom}>
          <button>User Login</button>
        </div>

        <span
          className={`${styles.menu_bars_nav}`}
          onClick={closeNavbar}
        >
          <div></div>
          <div></div>
        </span>
      </nav>
    </>
  );
};

export default Navbar;
