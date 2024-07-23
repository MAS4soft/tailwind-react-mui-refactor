import { Typography, Container, Box } from "@mui/material";

const ContactDetails = () => {
  return (

    
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Our Branches
        </Typography>
        <Typography variant="h5" gutterBottom>
          Contact Details
        </Typography>
        <Typography variant="h6" gutterBottom>
          South Africa Office
        </Typography>
        <Typography variant="body1" gutterBottom>
          Address: 4 Mountain View Rd, Bloemhof, Cape Town, 7530 
          <br />
          Tiger Valley , Cape Town
        </Typography>
        <br />
        <Typography variant="body1" gutterBottom>
          Phone: +27 (238) 456 7894
        </Typography>
        <Typography variant="body1" gutterBottom>
          Email: info@Armadia.com
          <br />
          support@Armadia.com
        </Typography>
      </Box>
    </Container>
  );
};

export default ContactDetails;
