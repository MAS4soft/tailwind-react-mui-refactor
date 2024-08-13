import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { Business, HistoryEdu, HomeWork } from "@mui/icons-material";
import { useNavigate } from "react-router-dom"; // استيراد useNavigate

const AboutInfo: React.FC = () => {
  const navigate = useNavigate(); // إنشاء دالة التوجيه
  
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
            <Typography variant="h5" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              We Are Leading International Company In The World
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </Typography>
            <Typography variant="body1" paragraph>
              Cras ultricies ligula sed magna dictum porta. Curabitur non nulla
              sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Curabitur arcu erat,
              accumsan id imperdiet et, porttitor at sem.
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
              <Business sx={{ fontSize: 40, color: "text.primary", mr: 2 }} />
              <Box>
                <Typography variant="h4" fontWeight="bold">
                  Building Staffs
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <HistoryEdu sx={{ fontSize: 40, color: "text.primary", mr: 2 }} />
              <Box>
                <Typography variant="h4" fontWeight="bold">
                  History Emphasis
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <HomeWork sx={{ fontSize: 40, color: "text.primary", mr: 2 }} />
              <Box>
                <Typography variant="h4" fontWeight="bold">
                  Economic Outcomes
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar.
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
