import AllServices from "../../Components/AllServices";
import Footer from "../../Components/Footer";
import Hero from "../../Components/Hero";
import OurTeam from "../../Components/OurTeam";
import SuccessStats from "../../Components/SuccessStats";
import { Box } from "@mui/material"; 
import Sustainability from "../../Components/Sustainability";
import AboutFounders from "../../Components/AboutFounders";
import AllProjects from "../../Components/AllProjects";
import Testimonials from "../../Components/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Box
        sx={{
          position: "relative",
          top: "-14rem", // Adjust as needed to position SuccessStats
          zIndex: 2, // Ensure it appears above Hero
          marginBottom: "-12rem", // Space below SuccessStats
        }}
      >
        <SuccessStats />
      </Box>
      <AllServices />
      <AllProjects />

      <AboutFounders />

      <Sustainability />
      
      <Testimonials />


      <OurTeam />
      <Footer />
    </div>
  );
};

export default Home;
