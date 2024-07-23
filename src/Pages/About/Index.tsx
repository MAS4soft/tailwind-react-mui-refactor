import React from "react";
import { Container } from "@mui/material";

import AboutInfo from "../../Components/AboutInfo";
import OurTeam from "../../Components/OurTeam";

import HeroAll from "../../Components/HeroAll";
import Footer from "../../Components/Footer";

const AboutUs: React.FC = () => {
  return (
    <>
      <HeroAll text="About" />
      <Container sx={{ py: 6 }}>
        <AboutInfo />
        <OurTeam />
        
      </Container>
      <Footer />
    </>
  );
};

export default AboutUs;
