import { Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HeroButton from "./HeroButton";

const Hero = () => {
  const navigate = useNavigate();

  const handleServicesButtonClick = () => {
    navigate("/services");
  };

  const handleContactButtonClick = () => {
    navigate("/ContactUs");
  };

  return (
    <div className="hero">
      <Container className="hero-content">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#fff",
          }}
        >
          <div style={{ paddingTop: "4rem" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: "1.5rem",  // Small screens
                  sm: "2rem",    // Medium screens and up
                },
                fontWeight: "bold",
                color: "#FFD700",
                marginBottom: "1rem",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              }}
            >
              Build Your Dream
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: {
                  xs: "2.5rem",  // Small screens
                  sm: "4rem",    // Medium screens and up
                },
                fontWeight: "bold",
                marginBottom: "1.5rem",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              }}
            >
              Building a More Sustainable Future
            </Typography>
          </div>
          <Typography
            variant="body1"
            sx={{
              width: {
                xs: "90%",    // Small screens
                sm: "70%",    // Medium screens and up
              },
              marginBottom: "2rem",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              fontSize: {
                xs: "0.875rem",  // Small screens
                sm: "1rem",      // Medium screens and up
              },
            }}
          >
            At Armadia, we provide modern and innovative construction solutions,
            committed to quality and excellence in all our projects. We help
            turn your vision into a sustainable reality through the latest
            engineering methods and advanced building materials. Together, we
            are building a better future for all.
          </Typography>
          <div style={{ display: "flex", gap: "1.5rem", paddingTop: "2rem" }}>
            <HeroButton
              label="Our Services"
              variant="contained"
              onClick={handleServicesButtonClick}
              bgColor="#FFC107"
              textColor="#000"
              hoverBgColor="#FFEA00"
            />
            <HeroButton
              label="Contact Us"
              variant="outlined"
              onClick={handleContactButtonClick}
              borderColor="#FFF"
              textColor="#FFF"
              hoverBgColor="#FFEA00"
              hoverTextColor="#000"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
