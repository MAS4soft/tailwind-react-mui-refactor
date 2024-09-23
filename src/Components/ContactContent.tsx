// src/Pages/ContactUs/ContactContent.tsx

import { Box } from "@mui/material";
import ContactSection from "./ContactSection";
import RequestQuoteAndFAQ from "./RequestQuoteAndFAQ";
import { contacts } from "./Contact"; 
import TitleDetails from "./TitleDetails";

const ContactContent = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        mb={4}
        // pt={8}
      >
        <TitleDetails 
          title="Our Branches"  
          subtitle="Contact Details"  
        />
      </Box>
      <ContactSection contacts={contacts} />
      <RequestQuoteAndFAQ />
    </>
  );
};

export default ContactContent;
