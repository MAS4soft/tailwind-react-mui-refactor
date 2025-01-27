// src/Pages/landingpage/Index.tsx

import Footer from "../../Components/Footer";
import { Box, Typography } from "@mui/material"; // استخدم MUI أو أي مكتبة مفضلة لديك
// import HeroAll from "../../Components/HeroAll";

const LandingPage = () => {
  return (
    <>
      {/* <HeroAll text="Limited-Time Offer: Home Extensions & New Builds at R6900/m²!" /> */}

      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          background:
            "url('./src/assets/service04.jpg') center/cover no-repeat",
          color: "white",
        }}
      >
        <Typography
          sx={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "20px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // إضافة ظل للنص
          }}
        >
          COMING SOON!
          {/* Limited-Time Offer: Home Extensions & New Builds at{" "}
          <span style={{ color: "red", fontWeight: "bold",  }}>R6900/m²!</span>{" "} */}
        </Typography>
        <Typography
          sx={{
            fontSize: "1.2rem",
            marginBottom: "40px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)", // إضافة ظل للنص
          }}
        >
          {/* No hidden costs – transparent pricing. */}
        </Typography>
        {/* <Button
          sx={{
            backgroundColor: "#FFC107",
            color: "black",
            "&:hover": {
              backgroundColor: "#FF9800",
            },
          }}
          variant="contained"
        >
          Download Specifications
        </Button> */}
      </Box>

      <Footer />
    </>
  );
};

export default LandingPage;
