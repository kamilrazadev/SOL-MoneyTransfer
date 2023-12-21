import React from "react";
import styles from "../MissionValues.module.css";

const StayInformed = () => {
  const stayUpdatedTableData = [
    {
      quarter: "Q1 2023 Mission Progress",
      publishDate: "4th May, 2023",
    },
    {
      quarter: "Q1 2023 Mission Progress",
      publishDate: "4th May, 2023",
    },
    {
      quarter: "Q1 2023 Mission Progress",
      publishDate: "4th May, 2023",
    },
    {
      quarter: "Q1 2023 Mission Progress",
      publishDate: "4th May, 2023",
    },
    {
      quarter: "Q1 2023 Mission Progress",
      publishDate: "4th May, 2023",
    },
    {
      quarter: "Q1 2023 Mission Progress",
      publishDate: "4th May, 2023",
    },
  ];

  return (
    <main className={styles.stay_informed_main}>
      <div className={styles.stay_informed_container}>
        <div className={styles.stay_informed_sec_title}>
          <h1>
            Stay Informed About <br /> Our Mission’s Progress: Get Updates
          </h1>
        </div>

        <div className={styles.stay_informed_content}>
          <div className={styles.content_txt}>
            <h6>Accountability Sentence:</h6>
            <p>
              “Our mission becomes meaningful when we take responsibility for
              its accomplishment.”
            </p>
            <p>
              “A mission only matters if we hold ourselves answerable for its
              fulfilment.”
            </p>
          </div>
          <table className={styles.content_table}>
            <thead>
              <tr className={styles.table_heading}>
                <td>Quater</td>
                <td>Publish Date</td>
              </tr>
            </thead>
            <tbody className={styles.table_body}>
              {stayUpdatedTableData.map((row, key) => (
                <tr key={key} className={styles.table_txt}>
                  <td>{row.quarter}</td>
                  <td>{row.publishDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default StayInformed;
