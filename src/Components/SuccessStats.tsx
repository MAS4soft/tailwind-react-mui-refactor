// src/Components/SuccessStats.tsx

import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const SuccessStats: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        padding: { xs: "2rem", md: "4rem" },
        margin: "0 auto",
        maxWidth: "1200px",
        width: "100%",
        borderTop: { xs: "none", md: `1px solid ${theme.palette.secondary.main}` }, // Top border on medium and large screens
        borderBottom: { xs: `1px solid ${theme.palette.secondary.main}`, md: "none" }, // Bottom border on small screens
        position: "relative",
        zIndex: 2, // Ensure it stays above other components
      }}
    >
      <Grid container spacing={0} sx={{ height: "100%" }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            padding: "2rem",
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
            sx={{ fontWeight: "bold", color: theme.palette.common.black }}
          >
            Build Your Dream
          </Typography>
          <Typography
            variant="h3"
            component="div"
            gutterBottom
            align="left"
            sx={{ fontWeight: "bold", color: theme.palette.secondary.main }}
          >
            25 Years Of Undefeated Success
          </Typography>
          <Typography
            variant="body1"
            component="div"
            gutterBottom
            align="left"
            sx={{ color: theme.palette.secondary.main }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo,
            lacinia eget consectetur sed, convallis.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{ padding: 0 }}>
          <Grid container spacing={0} sx={{ height: "100%" }}>
            {[
              { title: "512+", subtitle: "Successfully Project Finished" },
              { title: "25+", subtitle: "Years of experience with pride" },
              { title: "1120+", subtitle: "Revenue in 2017 investment" },
              { title: "1520+", subtitle: "Colleagues & counting more daily" },
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
                  borderRight: { xs: `1px solid ${theme.palette.secondary.main}`, sm: `1px solid ${theme.palette.secondary.main}` }, // Vertical lines
                  borderBottom: { xs: `1px solid ${theme.palette.secondary.main}`, sm: `1px solid ${theme.palette.secondary.main}` }, // Horizontal lines
                }}
              >
                <Paper
                  sx={{
                    padding: "2rem",
                    backgroundColor: theme.palette.background.paper,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    borderRadius: 0,
                    boxSizing: "border-box",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ color: theme.palette.secondary.main, fontWeight: "bold" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: theme.palette.secondary.main }}>
                    {item.subtitle}
                  </Typography>
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
