import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Services from "./Pages/Services/Services";
import Help from "./Pages/Help/Help";
import CountriesWeCover from "./Pages/CountriesWeCover/CountriesWeCover";
import MissionValues from "./Pages/MissionValues/MissionValues";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Duration of the animation
      easing: "ease-in-out", // Easing type
      delay: 50,
    });
  }, []);

  return (
    <>
      <nav className="navbar">
        <Navbar />
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/help" element={<Help />} />
          <Route path="/mission-and-values" element={<MissionValues />} />
          <Route path="/countries-we-cover" element={<CountriesWeCover />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
