import AllServices from "../../Components/AllServices";
import Footer from "../../Components/Footer";
import Hero from "../../Components/Hero";
// import OurTeam from "../../Components/OurTeam";
import SuccessStats from "../../Components/SuccessStats";
import { Box } from "@mui/material"; 
import Sustainability from "../../Components/Sustainability";
// import AboutFounders from "../../Components/AboutFounders";
import AllProjects from "../../Components/AllProjects";
import RequestQuoteAndFAQ from "../../Components/RequestQuoteAndFAQ";
// import Testimonials from "../../Components/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Box
        sx={{
          position: "relative",
          zIndex: 2, // Ensure it appears above Hero
          // Default values for screens between 600px and 1024px
          top: "-2rem",
          marginBottom: "-2rem",
          // Apply different values for large screens
          '@media (min-width: 1024px)': {
            top: "-14rem", // Adjust as needed to position SuccessStats
            marginBottom: "-12rem", // Space below SuccessStats
          },
          // Apply different values for small screens
          '@media (max-width: 600px)': {
            top: "-14rem",
            marginBottom: "-10rem",
          },
          '@media (max-width: 400px)': {
            top: "-2rem",
            marginBottom: "-2rem",
          },
        }}
      >
        <SuccessStats />
      </Box>
      <AllServices />

      <Sustainability />

      <AllProjects limit={4} title="Featured Projects" />

      {/* <AboutFounders /> */}

      
      <RequestQuoteAndFAQ />

      {/* <OurTeam /> */}
      <Footer />
    </div>
  );
};

export default Home;
