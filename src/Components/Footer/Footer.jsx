import React from "react";
import styles from "./Footer.module.css";
import twitterX from "/assets/images/socialIcons/twitterX.png";
import facebook from "/assets/images/facebook_3670124.png";
import instagram from "/assets/images/instagram_3955024.png";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer_links}>
        <div>
          <ul>
            <h4>Company and Team</h4>

            <li>Company and Team</li>
            <li>Security</li>
            <li>Press</li>
            <li>Careers</li>
            <li>Service Status</li>
            <li>Investor relations</li>
            <li>Mission roadmap</li>
            <li>Affiliates and partnerships</li>
            <li>Help centre</li>
            <li>Reviews</li>
          </ul>
          <ul>
            <h4>SOL Products</h4>

            <li>International money transfer</li>
            <li>SOL account</li>
            <li>International debit card</li>
            <li>Travel money card</li>
            <li>Large amount transfer</li>
            <li>Receive money</li>
            <li>Assets</li>
            <li>SOL Platform</li>
            <li>SOL Business</li>
            <li>Business debit card</li>
            <li>Mass payments</li>
            <li>Resources</li>
          </ul>
          <ul>
            <h4>News and Blogs</h4>

            <li>Currency converter</li>
            <li>Swift/BIC codes</li>
            <li>IBAN codes</li>
            <li>Rate alerts</li>
            <li>Compare exchange rates</li>
            <li>Incorporate your company</li>
            <li>Invoice generator</li>
            <li>Business Calculators</li>
          </ul>
          <ul className={styles.footer_links_social}>
            <h4>Follow us</h4>

            <div>
              <li>
                <img src={facebook} alt="facebook" />
              </li>
              <li>
                <img src={instagram} alt="instagram" />
              </li>
              <li>
                <img src={twitterX} alt="twitterX" />
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <div className={styles.footer_bottom_links}>
          <ul>
            <li>Legal</li>
            <li>Complains</li>
          </ul>
          <ul>
            <li>Privacy Policy</li>
            <li>Country site map</li>
          </ul>
          <ul>
            <li>Cookie Policy</li>
            <li>Modern slavery policy</li>
          </ul>
        </div>

        <div className={styles.footer_bottom_2}>
          <p>© SOL Money Transfer 2023</p>
          <p>
            SOL is authorised by the Financial Conduct Authority under the
            Electronic Money Regulations 2011, Firm Reference 000000, for the
            issuing of electronic money. All investment services are provided by
            the respective SOL Assets entity in your location.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
