// src/Components/Footer.tsx
import { Box, Typography, Grid, Container, Divider } from "@mui/material";
import SocialMediaIcons from "./SocialMediaIcons"; // استيراد المكون الجديد

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        color: "white",
        py: 4,
        p: 6,
        mt: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          sx={{
            textAlign: { xs: "center", md: "left" },
            justifyContent: { xs: "center", md: "flex-start" },
            p: 3,
          }}
        >
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              Build With Urban Nest
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque in ipsum id orci.
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Mon - Sat 8:00 - 17:30,
              <br />
              Sunday - CLOSED
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              Our Services
            </Typography>
            <Typography variant="body2">
              Chemical Engineering Projects
            </Typography>
            <Typography variant="body2">
              Mining Engineering Construction
            </Typography>
            <Typography variant="body2">
              Engineering Welding Engineering
            </Typography>
            <Typography variant="body2">Welding Engineering</Typography>
            <Typography variant="body2">Space Program XYZ</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              Office in South Africa
            </Typography>
            <Typography variant="body2">
              4 Mountain View Rd, Bloemhof,
              <br />
              Tiger Valley, Cape Town 7530
            </Typography>
            <br />
            <Typography variant="body2">(+27) 826-826-165</Typography>
            <Typography variant="body2">(+20) 111-0052-444</Typography>
            <br />
            <Typography variant="body2">info@Armadia.com</Typography>
            <Typography variant="body2">contact@Armadia.com</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              Our Locations
            </Typography>
            <Typography variant="body2">SOUTH AFRICA</Typography>
            <br />
            <Typography variant="body2">EGYPT</Typography>
          </Grid>
        </Grid>

<Divider sx={{ my: 4, backgroundColor: "#ffffff33",  }} />

        <Grid
          container
          spacing={2}
          sx={{
            textAlign: { xs: "center", md: "left" },
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: "center",
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="body2" color="inherit">
              Copyright © 2024 ARMADIA Construction Company
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
              }}
            >
              <SocialMediaIcons />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
