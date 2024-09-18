import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";

const SuccessStats: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFC107",
        padding: "0rem",
        margin: "2rem auto",
        maxWidth: { xs: "100%", lg: "1200px", xl: "1400px" },
        width: "100%",
        maxhight: { xs: "100%", lg: "1400px", xl: "1600px" },
        hight: "100%",
      }}
    >
      <Grid container spacing={0} sx={{ height: "100%" }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            padding: "4rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            align="left"
            sx={{ fontWeight: "" }}
          >
            Build Your Future with Excellence
          </Typography>
          <Typography
            variant="h3"
            component="div"
            gutterBottom
            align="left"
            sx={{ fontWeight: "bold" }}
          >
            15 Years of Proven Success
          </Typography>
          <Typography
            variant="body1"
            component="div"
            gutterBottom
            align="left"
            sx={{ color: "#000" }}
          >
            At Armadia Construction, we take pride in delivering high-quality
            construction services in Cape Town, South Africa. With our extensive
            experience spanning both Egypt and South Africa, we offer tailored
            solutions that meet the unique needs of your projects. Let us help
            turn your vision into reality with the highest standards of quality
            and professionalism.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{ padding: 0, margin: 0 }}>
          <Grid container spacing={0} sx={{ height: "100%" }}>
            {[
              {
                title: "200+",
                subtitle: "Projects Completed Across Continents",
              },
              { title: "15+", subtitle: "Years of experience with proud" },
              { title: "10+", subtitle: "New Projects Initiated This Year" },
              { title: "1000+", subtitle: "Satisfied Clients and Counting" },
            ].map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                key={index}
                sx={{
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  height: { xs: "auto", sm: "50%" },
                }}
              >
                <Paper
                  sx={{
                    padding: "2rem",
                    backgroundColor: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    borderRadius: 0,
                    boxSizing: "border-box",
                  }}
                >
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1">{item.subtitle}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SuccessStats;
