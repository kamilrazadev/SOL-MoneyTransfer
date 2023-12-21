import React from "react";
import HeroBanner from "./Sections/HeroBanner";
import MoneyTransferForm from "./Sections/MoneyTransferForm";
import MoneyTransferLLC from "./Sections/MoneyTransferLLC";
import InternationalMoneyTrans from "./Sections/InternationalMoneyTrans";
import PeopleGoingPlaces from "./Sections/PeopleGoingPlaces";
import DisappointThieves from "./Sections/DisappointThieves";
import OurTeam from "./Sections/OurTeam";

const HomePage = () => {
  return (
    <main>
      <HeroBanner />
      <MoneyTransferForm />
      <MoneyTransferLLC />
      <InternationalMoneyTrans />
      <PeopleGoingPlaces />
      <DisappointThieves />
      <OurTeam />
    </main>
  );
};

export default HomePage;
