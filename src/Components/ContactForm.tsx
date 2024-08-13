import { Container, Box, Typography } from "@mui/material";
import Map from "./Map";
import ContactDetails from "./ContactDetails";
import Footer from "./Footer";
import HeroAll from "./HeroAll";
import RequestQuote from "./RequestQuote";

const ContactForm = () => {
  return (
    <>
      <HeroAll text="Contact Us" />
      <Container>
        <Box
          my={4}
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-between"
        >
          <Box flex={1} ml={{ md: 2 }} mb={{ xs: 4, md: 0 }}>
            <ContactDetails />
          </Box>
          <Box flex={1} mr={{ md: 2 }} mb={{ xs: 4, md: 0 }}>
            <Map />
          </Box>
        </Box>
        <Box display="flex" justifyContent="center">
          <Box width={{ xs: "100%", sm: "80%", md: "60%", lg: "50%" }}>
            <Typography variant="h4" gutterBottom textAlign="center">
              Send Us a Message
            </Typography>
            <Typography variant="body1" textAlign="center">
              For any inquiries, please contact us using the details provided.
            </Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" mt={4}>
          <Box width={{ xs: "100%", sm: "80%", md: "60%", lg: "50%" }}>
            <RequestQuote />
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default ContactForm;
