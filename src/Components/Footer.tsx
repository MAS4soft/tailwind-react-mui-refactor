import { Box, Typography, Grid, Container, Divider, Link } from "@mui/material"; // تأكد من استيراد Link
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
              Building Your Dreams with Excellence
            </Typography>
            <Typography variant="body2">
              Transforming visions into reality with unparalleled expertise. Our
              commitment to quality and service ensures that your project is in
              capable hands.
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Mon - Fri 8:00 - 16:00,
              <br />
              Sat - Sun : CLOSED
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              Our Services
            </Typography>
            <Typography variant="body2">Residential Construction</Typography>
            <Typography variant="body2">Commercial Construction</Typography>
            <Typography variant="body2">
              Interior and Exterior Designs
            </Typography>
            <Typography variant="body2">
              Renovations and Modifications
            </Typography>
            <Typography variant="body2">
              Planning and Engineering Design
            </Typography>
            <Typography variant="body2">
              Green Spaces and Urban Landscaping
            </Typography>
            <Typography variant="body2">Heritage Restorations </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              Headquarters Office
            </Typography>
            <Link
              href="https://maps.app.goo.gl/KdTyRQkLk3zUW8Jp8"
              color="inherit"
              target="_blank"
            >
              4 Mountain View Rd, Bloemhof,Tiger Valley,
              <br />
              Cape Town 7530
              <br />
              South Africa
            </Link>
            <br />
            <br />
            <Typography variant="body2">
              <Link href="tel:+27210135294" color="inherit">
                (+27) 21-013-5294
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="https://wa.me/27660041063" color="inherit">
                (+27) 66-004-1063
              </Link>
            </Typography>
            <br />
            <Typography variant="body2">
              <Link href="mailto:info@Armadia.co.za" color="inherit">
                info@Armadia.co.za
              </Link>
            </Typography>
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

        <Divider sx={{ my: 4, backgroundColor: "#ffffff33" }} />

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
