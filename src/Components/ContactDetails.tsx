import { Typography, Container, Box, Link } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

interface ContactDetailsProps {
  name: string;
  address: string;
  phone?: string;   // phone is optional
  whatsapp?: string; // whatsapp is optional
  email: string;
}

const ContactDetails = ({ name, address, phone = "", whatsapp = "", email }: ContactDetailsProps) => {
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
        
        {/* WhatsApp Section */}
        {whatsapp && (
          <Typography variant="body1" gutterBottom>
            <strong>WhatsApp:</strong> <br />
            <Link
              href={`https://wa.me/${whatsapp.replace(/\s|\(|\)|-/g, "")}`} // WhatsApp link
              target="_blank"
              sx={{ display: "flex", alignItems: "center", color: "inherit" }}
            >
              <WhatsAppIcon sx={{ mr: 1, color: "green" }} /> {whatsapp}
            </Link>
          </Typography>
        )}
        <br />
        
        {/* Phone Section with Phone Icon */}
        {phone && (
          <Typography variant="body1" gutterBottom>
            <strong>Phone:</strong> <br />
            <Link
              href={`tel:${phone.replace(/\s|\(|\)|-/g, "")}`} // Phone link for calling
              sx={{ display: "flex", alignItems: "center", color: "inherit" }}
            >
              <PhoneIcon sx={{ mr: 1 }} /> {phone}
            </Link>
          </Typography>
        )}
        <br />

        {/* Email Section with Email Icon */}
        <Typography variant="body1" gutterBottom>
          <strong>Email:</strong> <br />
          <Link
            href={`mailto:${email}`} // Email link for sending an email
            sx={{ display: "flex", alignItems: "center", color: "inherit" }}
          >
            <EmailIcon sx={{ mr: 1 }} /> {email}
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default ContactDetails;
