import React from "react";
import styles from "./MissionValues.module.css";
import HeroBanner from "./Sections/HeroBanner";
import MissonValuesCard from "./Sections/MissonValuesCard";
import StayInformed from "./Sections/StayInformed";

const MissionValues = () => {
  const missionValuesCardData = [
    {
      cardTitle: "Instant",
      cardContent:
        "SOL Money Transfer prides itself on providing instant financial transactions, ensuring that your money reaches its destination promptly. With our streamlined processes and advanced technology, we minimise delays, allowing for quick and efficient money transfers within moments of initiation.",
    },
    {
      cardTitle: "Transparent",
      cardContent:
        "Transparency is at the core of SOL’s commitment to its customers. Our platform provides clear and comprehensive information on exchange rates, fees, and transaction status. By offering a transparent financial ecosystem, SOL ensures that customers have a complete understanding of their transactions, fostering trust and confidence in our services.",
    },
    {
      cardTitle: "Secure Financial Environment",
      cardContent:
        "Security is paramount at SOL Money Transfer. We employ state-of-the-art encryption and verification protocols to safeguard customer data and financial transactions. Our commitment to providing a secure environment means that you can trust SOL to protect your sensitive information and ensure the integrity of every money transfer. Your financial safety is our top priority.",
    },
  ];

  return (
    <main className={styles.mission_main}>
      <HeroBanner />
      <div className={styles.mission_cards_container}>
        {missionValuesCardData.map((cardData, key) => (
          <MissonValuesCard
            key={key}
            title={cardData.cardTitle}
            content={cardData.cardContent}
          />
        ))}
      </div>
      <div className={styles.card_section_button}>
        <button className="blue_blue_common_btn">Learn More</button>
      </div>

      <StayInformed />

    </main>
  );
};

export default MissionValues;
