import { Typography, Button, Container } from "@mui/material";
import "../index.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/services");
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
          <div style={{ paddingTop: "4rem" }}> {/* اضبط المسافة هنا إذا لزم الأمر */}
            <Typography
              variant="h1"
              style={{
                fontSize: "2rem",
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
              style={{
                fontSize: "5rem",
                fontWeight: "bold",
                marginBottom: "1.5rem",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              }}
            >
              Vision Got Larger
            </Typography>
          </div>
          <Typography
            variant="body1"
            style={{
              width: "70%",
              marginBottom: "2rem",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            porttitor accumsan tincidunt. Donec rutrum congue leo eget
            malesuada. Nulla porttitor accumsan tincidunt. Donec rutrum congue
            leo eget malesuada. Curabitur arcu erat, accumsan id imperdiet et,
            porttitor at sem.
          </Typography>
          <div style={{ display: "flex", gap: "1.5rem", paddingTop: "2rem" }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#FFC107",
                color: "#000",
                "&:hover": {
                  bgcolor: "#FFEA00",
                },
                
              }}
              onClick={handleButtonClick}
            >
              Our Services
            </Button>
            <Button
              variant="outlined"
              sx={{
                bgcolor: "transparent",
                color: "#FFF",
                border: "2px solid #FFF",
                "&:hover": {
                  bgcolor: "#FFEA00",
                  color: "#000",
                  border: "2px solid #000",
                },
              }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
