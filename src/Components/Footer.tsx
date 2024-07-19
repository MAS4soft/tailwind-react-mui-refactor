import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material"; // Added YouTube import
import { Box } from "@mui/material"; // Added IconButton import

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We are Armadia company, dedicated to providing the best service to
              our customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              302 Koeberg Rd, Milnerton, Cape Town, 7441{" "}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@Armadai.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +27 234 567 890
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Link
                href="https://www.facebook.com/"
                color="inherit"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  // mx: 1, // Margin between icons
                  '&:hover svg': {
                    color: '#FFD700', // Yellow color on hover
                  },
                }}
              >
                <Facebook sx={{ color: '#000' }} /> {/* Black color by default */}
              </Link>
              <Link
                href="https://www.instagram.com/"
                color="inherit"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  // mx: 1, // Margin between icons
                  '&:hover svg': {
                    color: '#FFD700', // Yellow color on hover
                  },
                }}
              >
                <Instagram sx={{ color: '#000' }} /> {/* Black color by default */}
              </Link>
              <Link
                href="https://www.twitter.com/"
                color="inherit"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  // mx: 1, // Margin between icons
                  '&:hover svg': {
                    color: '#FFD700', // Yellow color on hover
                  },
                }}
              >
                <Twitter sx={{ color: '#000' }} /> {/* Black color by default */}
              </Link>
              <Link
                href="https://www.youtube.com/"
                color="inherit"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  // mx: 0, // Margin between icons
                  '&:hover svg': {
                    color: '#FFD700', // Yellow color on hover
                  },
                }}
              >
                <YouTube sx={{ color: '#000' }} /> {/* Black color by default */}
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Armadai for Constractions
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
            <p>MuhammetShawky</p>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
