import React from "react";
import { Container } from "@mui/material";

import AboutInfo from "../../Components/AboutInfo";
import OurTeam from "../../Components/OurTeam";

import HeroAll from "../../Components/HeroAll";
import Footer from "../../Components/Footer";
import Sustainability from "../../Components/Sustainability";
import OurClients from "../../Components/OurClints";

// import MyForm from "../../Components/MyForm";

const AboutUs: React.FC = () => {
  return (
    <>
      <HeroAll text="About" />
      <Container sx={{ py: 6 }}>
        <AboutInfo />
        <OurTeam />
      </Container>
      <Sustainability />
      <OurClients />

      <Footer />
    </>
  );
};

export default AboutUs;
