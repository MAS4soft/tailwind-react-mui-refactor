// src\Pages\ContactUs\Index.tsx

import { Container } from "@mui/material";
// import ContactSection from "../../Components/ContactSection";
import Footer from "../../Components/Footer";
import HeroAll from "../../Components/HeroAll";
// import RequestQuoteAndFAQ from "../../Components/RequestQuoteAndFAQ";
import ContactContent from "../../Components/ContactContent";

const ContactUsPage = () => {
  return (
    <>
      <HeroAll text="Contact Us" />
      <Container>
        <ContactContent />
      </Container>
      <Footer />
    </>
  );
};

export default ContactUsPage;

