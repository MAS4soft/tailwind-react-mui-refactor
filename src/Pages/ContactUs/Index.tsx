// src/Pages/ContactUs/Index.tsx

import { Container, Box, Typography } from "@mui/material";
import ContactSection from "../../Components/ContactSection";
import Footer from "../../Components/Footer";
import HeroAll from "../../Components/HeroAll";
import RequestQuoteAndFAQ from "../../Components/RequestQuoteAndFAQ"; // استيراد المكون الجديد

const ContactUsPage = () => {
  const contacts = [
    {
      name: "South Africa Office",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d289.00556657183665!2d18.64482933903889!3d-33.87890430117276!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5100765f3055%3A0xf3c9984259b8e454!2sArmadia!5e0!3m2!1sen!2sza!4v1721655921574!5m2!1sen!2sza",
      address:
        "4 Mountain View Rd, Bloemhof, Cape Town, 7530\nTiger Valley, Cape Town",
      phone: "+27 (238) 456 7894",
      email: "info@Armadia.com\nsupport@Armadia.com",
    },
    {
      name: "Egypt Office",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.746694696201!2d31.414614924656263!3d30.015428974938146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583cefadc31331%3A0x8ea79694c7fbb68d!2sAmazing%20Trips!5e0!3m2!1sar!2sza!4v1723471850568!5m2!1sar!2sza",
      address: "Cairo , Egypt",
      phone: "+20 (111) 123 4567",
      email: "contact@Armadia.com\nsupport@Armadia.com",
    },
  ];

  return (
    <>
      <HeroAll text="Contact Us" />

      <Container>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          mb={4}
          pt={8}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ color: "primary.main", fontWeight: "bold" }}
          >
            Our Branches
          </Typography>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
            Contact Details
          </Typography>
        </Box>

        <ContactSection contacts={contacts} />

        <RequestQuoteAndFAQ />
      </Container>

      <Footer />
    </>
  );
};

export default ContactUsPage;
