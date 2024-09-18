import React from "react";
import { Box, Button, Typography, Grid, useTheme } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ComputerIcon from "@mui/icons-material/Computer";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import { useNavigate } from "react-router-dom";

const Sustainability: React.FC = () => {
  const theme = useTheme();

  const navigate = useNavigate();

  const handleContactButtonClick = () => {
    navigate("/ContactUs");
  };

  return (
    <Box
      sx={{ display: "flex", minHeight: "80vh", paddingY: theme.spacing(4) }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            position: "relative",
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(src/assets/cons06.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: theme.spacing(4),
            color: "white",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ padding: theme.spacing(4, 6) }}>
            <Typography variant="h4" color="#FFC107">
              Sustainability
            </Typography>
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", marginBottom: theme.spacing(2) }}
            >
              Committed To Keep People Healthy & Safe
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: theme.spacing(4) }}>
              At Armadia, we prioritize sustainability by integrating
              eco-friendly practices into all our projects, ensuring healthier
              environments and safer spaces for our clients and community.
            </Typography>
            <Button
              variant="outlined"
              sx={{
                bgcolor: "transparent",
                color: "#FFF",
                border: "2px solid #FFF",
                fontSize: "1.2rem",
                padding: "0.75rem 1.5rem",
                borderRadius: "0",
                "&:hover": {
                  bgcolor: "#FFEA00",
                  color: "#000",
                  border: "2px solid #000",
                },
              }}
              onClick={handleContactButtonClick}
            >
              GET IN TOUCH
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundImage:
              "linear-gradient( rgba(255, 193, 7, 0.9), rgba(255, 193, 7, 0.9)), url(src/assets/cons06.jpg)",
            padding: theme.spacing(4),
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ padding: theme.spacing(4, 6) }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", marginBottom: theme.spacing(2) }}
            >
              We Follow Best Practices
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: theme.spacing(4) }}>
              At Armadia Construction, we uphold the highest standards in
              quality, safety, and efficiency throughout every project phase.
            </Typography>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: theme.spacing(2),
                }}
              >
                <CheckCircleIcon sx={{ marginRight: theme.spacing(1) }} />{" "}
                Sustainability
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: theme.spacing(2),
                }}
              >
                <AccessTimeIcon sx={{ marginRight: theme.spacing(1) }} />{" "}
                Project On Time
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: theme.spacing(2),
                }}
              >
                <ComputerIcon sx={{ marginRight: theme.spacing(1) }} /> Modern
                Technology
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: theme.spacing(2),
                }}
              >
                <DesignServicesIcon sx={{ marginRight: theme.spacing(1) }} />{" "}
                Latest Designs
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Sustainability;
