// // src/Pages/ContactUs/Index.tsx

// src/Pages/ContactUs/ContactUsPage.tsx

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



// import { Container, Box, Typography } from "@mui/material";
// import ContactSection from "../../Components/ContactSection";
// import Footer from "../../Components/Footer";
// import HeroAll from "../../Components/HeroAll";
// import RequestQuoteAndFAQ from "../../Components/RequestQuoteAndFAQ"; // استيراد المكون الجديد

// const ContactUsPage = () => {
//   const contacts = [
//     {
//       name: "Headquarters Office",
//       mapSrc:
//         "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d484170.58570418356!2d18.506620814069816!3d-33.98036390190449!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5100765f3055%3A0xf3c9984259b8e454!2sARMADIA!5e0!3m2!1sen!2sza!4v1726676551849!5m2!1sen!2sza",
//       address:
//         "4 Mountain View Rd, Bloemhof,\n Tiger Valley, Cape Town 7530 \n South Africa",
//       phone: "(+27) 660-041-063",
//       email: "info@Armadia.co.za",
//     },
//     {
//       name: "Middle East Office",
//       mapSrc:
//         "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.6826551024874!2d31.410954918498255!3d30.017267347443816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583ceff38ac8f7%3A0x603bacbdea4310fd!2sDowntown%20Katameya!5e0!3m2!1sen!2sza!4v1726676727254!5m2!1sen!2sza",
//       address:
//         "318 Showyfat St, \n 5th District, Road 90,\n Cairo Governorate, Egypt",
//       phone: "(+20) 111-0052-444",
//       email: "info@Armadia.co.za",
//     },
//   ];

//   return (
//     <>
//       <HeroAll text="Contact Us" />

//       <Container>
//         <Box
//           display="flex"
//           flexDirection="column"
//           alignItems="center"
//           justifyContent="center"
//           textAlign="center"
//           mb={4}
//           pt={8}
//         >
//           <Typography
//             variant="h4"
//             gutterBottom
//             sx={{ 
//               color: "primary.main", 
//               fontSize: { xs: '1.5rem', sm: '4rem', xl: '4rem' } // Responsive font size for title
//             }}
//           >
//             Our Branches
//           </Typography>
//           <Typography 
//             variant="h3" 
//             gutterBottom 
//             sx={{ 
//               fontWeight: "bold", 
//               fontSize: { xs: '2.25rem', sm: '3.5rem', xl: '8rem' } // Responsive font size for subtitle
//             }}
//           >
//             Contact Details
//           </Typography>
//         </Box>

//         <ContactSection contacts={contacts} />

//         <RequestQuoteAndFAQ />
//       </Container>

//       <Footer />
//     </>
//   );
// };

// export default ContactUsPage;
