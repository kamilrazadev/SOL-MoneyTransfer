import React from "react";
import styles from "../CountriesWeCover.module.css";
import colombiaFlag from "/assets/Flags/Flag_of_Colombia_Flat_Wavy-512x393.png";
import mexicoFlag from "/assets/Flags/Flag_of_Mexico_Flat_Wavy-512x337.png";
import boliviaFlag from "/assets/Flags/Flag_of_Bolivia_Flat_Wavy-512x401.png";
import costaricaFlag from "/assets/Flags/Flag_of_Costa_Rica_Flat_Wavy-512x353.png";
import uruguayFlag from "/assets/Flags/Flag_of_Uruguay_Flat_Wavy-512x393.png";
import hondurasFlag from "/assets/Flags/Honduras.png";
import venezuelaFlag from "/assets/Flags/Venezula.png";
import beliceFlag from "/assets/Flags/Flag_of_Belize_Flat_Wavy-512x353.png";
import guatemalaFlag from "/assets/Flags/Flag_of_Guatemala_Flat_Wavy-512x368.png";
import brasilFlag from "/assets/Flags/Flag_of_Brazil_Flat_Wavy-512x412.png";

const CountryFlags = () => {
  const countriesData = [
    {
      flag: colombiaFlag,
      name: "Colombia",
    },
    {
      flag: mexicoFlag,
      name: "Mexico",
    },
    {
      flag: boliviaFlag,
      name: "Bolivia",
    },
    {
      flag: costaricaFlag,
      name: "Costa Rica",
    },
    {
      flag: uruguayFlag,
      name: "uruguay",
    },
    {
      flag: hondurasFlag,
      name: "honduras",
    },
    {
      flag: venezuelaFlag,
      name: "venezuela",
    },
    {
      flag: beliceFlag,
      name: "belice",
    },
    {
      flag: guatemalaFlag,
      name: "guatemala",
    },
    {
      flag: brasilFlag,
      name: "brasil",
    },
  ];

  return (
    <main className={styles.countries_flags_main}>
      <div className={styles.countries_flags_container}>
        <div className={styles.scrolling_flags}>
          {countriesData.map((country, key) => (
            <div className={styles.flags_container} key={key}>
              <img src={country.flag} alt="" />
              <h6>{country.name}</h6>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CountryFlags;
