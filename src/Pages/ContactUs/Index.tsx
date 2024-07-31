import { Container, Box, Typography, ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Map from "../../Components/Map";
import ContactDetails from "../../Components/ContactDetails";
import Footer from "../../Components/Footer";
import HeroAll from "../../Components/HeroAll";
import RequestQuote from "../../Components/RequestQuote"; // تأكد من تعديل المسار ليشير إلى مكان `RequestQuote`
import FAQ from "../../Components/FAQ";

const theme = createTheme({
  palette: {
    primary: {
      main: '#00264d',
    },
    warning: {
      main: '#ffb300',
    },
  },
});

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
              {/* Send Us a Message */}
            </Typography>
            
            <RequestQuote />
            <FAQ />
          </Box>
        </Box>
      </Container>

      <Footer />
    </>
  );
};

const ContactUsPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ContactForm />
    </ThemeProvider>
  );
};

export default ContactUsPage;
