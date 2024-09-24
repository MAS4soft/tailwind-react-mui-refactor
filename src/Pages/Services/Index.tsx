import AllServices from "../../Components/AllServices";
import Footer from "../../Components/Footer";
import HeroAll from "../../Components/HeroAll";
import HeroButton from "../../Components/HeroButton"; // Import the HeroButton component
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const handleContactButtonClick = () => {
    navigate("/ContactUs");
  };

  return (
    <div>
      <HeroAll text="Services" />
      <AllServices />

      {/* Contact Us Button before the Footer */}
      <Box
        sx={{ display: "flex", justifyContent: "center", padding: "2rem 0" }}
      >
        <HeroButton
          label="Contact Us"
          variant="contained"
          onClick={handleContactButtonClick}
          bgColor="#FFC107"
          textColor="#000"
          hoverBgColor="#FFEA00"
          hoverTextColor="#000"
        />
      </Box>

      <Footer />
    </div>
  );
};

export default Services;
