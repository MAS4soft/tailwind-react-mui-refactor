// src/Components/ContactDetails.tsx

import { Typography, Container, Box } from "@mui/material";

interface ContactDetailsProps {
  name : string;
  address: string;
  phone: string;
  email: string;
}

const ContactDetails = ({ name, address, phone, email }: ContactDetailsProps) => {
  return (
    <Container>
      <Box my={4}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ color: "warning.main", fontWeight: "bold" }}
        >
          {name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Address:</strong> <br />
          {address}
        </Typography>
        <br />
        <Typography variant="body1" gutterBottom>
          <strong>Phone:</strong> <br />
          {phone}
        </Typography>
        <br />
        <Typography variant="body1" gutterBottom>
          <strong>Email:</strong> <br />
          {email}
        </Typography>
      </Box>
    </Container>
  );
};

export default ContactDetails;
