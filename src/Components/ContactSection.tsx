// src/Components/ContactSection.tsx

import { Box } from "@mui/material";
import Map from "./Map";
import ContactDetails from "./ContactDetails";

interface Contact {
  name: string;
  mapSrc: string;
  address: string;
  whatsapp: string;
  phone: string;
  email: string;
}

interface ContactSectionProps {
  contacts: Contact[];
}

const ContactSection = ({ contacts }: ContactSectionProps) => {
  return (
    <>
      {contacts.map((contact, index) => (
        <Box
          key={index}
          my={4}
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-between"
        >
          <Box flex={1} ml={{ md: 2 }} mb={{ xs: 4, md: 0 }}>
            <ContactDetails
              name={contact.name}
              address={contact.address}
              whatsapp={contact.whatsapp}
              phone={contact.phone}
              email={contact.email}
            />
          </Box>
          <Box flex={2} mr={{ md: 2 }} mb={{ xs: 4, md: 0 }}>
            <Map mapSrc={contact.mapSrc} />
          </Box>
        </Box>
      ))}
    </>
  );
};

export default ContactSection;
