import { Box, Typography, Grid, Button } from "@mui/material";
import { Business, HistoryEdu, HomeWork } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const AboutInfo: React.FC = () => {
  const navigate = useNavigate();

  const handleServicesButtonClick = () => {
    navigate("/services");
  };

  return (
    <Box sx={{ py: 2 }}>
      <Grid container spacing={4} alignItems="stretch">
        {/* الجزء الأيسر: النصوص والزر */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Box sx={{ mb: 6, maxWidth: "100%" }}>
            <Typography variant="h5" color="primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Leading the Way in Construction Excellence
            </Typography>
            <Typography variant="body1" paragraph>
              At Armadia Construction, we are dedicated to redefining the
              construction industry with our commitment to quality and
              innovation. With expertise in residential, commercial, and
              renovation projects, we strive to deliver outstanding results that
              meet the highest standards.
            </Typography>
            <Typography variant="body1" paragraph>
              Our mission is to create spaces that enhance the lives of our
              clients and contribute positively to the community. From initial
              design to project completion, we leverage cutting-edge techniques
              and sustainable practices to ensure every project is executed with
              precision and excellence. Our experienced team works
              collaboratively to bring your vision to life, ensuring timely
              delivery and exceptional quality.{" "}
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#FFC107",
                color: "#000",
                fontSize: "1.2rem",
                padding: "0.75rem 1.5rem",
                borderRadius: "0",
                "&:hover": {
                  bgcolor: "#FFEA00",
                },
              }}
              onClick={handleServicesButtonClick}
            >
              Our Services
            </Button>
          </Box>
        </Grid>

        {/* الجزء الأيمن: المواضيع */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              maxWidth: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Business sx={{ fontSize: 40, color: "primary.main", mr: 2 }} />
              <Box>
                <Typography variant="h5" fontWeight="bold">
                  Building Staff
                </Typography>
                <Typography variant="h4" fontWeight="bold">
                  Our Expert Team
                </Typography>
                <Typography variant="body1">
                  At Armadia Construction, our skilled team of architects,
                  engineers, and tradespeople ensures exceptional results
                  through ongoing training and expertise.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <HistoryEdu sx={{ fontSize: 40, color: "primary.main", mr: 2 }} />
              <Box>
                <Typography variant="h5" fontWeight="bold">
                  History Emphasis
                </Typography>
                <Typography variant="h4" fontWeight="bold">
                  A Legacy of Excellence
                </Typography>
                <Typography variant="body1">
                  With years of successful projects, Armadia Construction is
                  known for its reliability and quality in residential,
                  commercial, and renovation construction.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <HomeWork sx={{ fontSize: 40, color: "primary.main", mr: 2 }} />
              <Box>
                <Typography variant="h5" fontWeight="bold">
                  Economic Outcomes
                </Typography>
                <Typography variant="h4" fontWeight="bold">
                  Delivering Value
                </Typography>
                <Typography variant="body1">
                  We focus on cost-effective solutions and efficient project
                  management to provide maximum value and positive economic
                  impact for our clients.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutInfo;
