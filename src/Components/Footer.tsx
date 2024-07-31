import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
        mt: 10,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              color="#FFC107"
              gutterBottom
              textAlign="center"
            >
              About Us
            </Typography>
            <Typography variant="body2" color="white">
              We are Armadia company, dedicated to providing the best service to
              our customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              color="#FFC107"
              gutterBottom
              textAlign="center"
            >
              Contact Us
            </Typography>
            <Typography variant="body2" color="white">
              4 Mountain View Rd, Tiger Valley, Cape Town, 7530{" "}
            </Typography>
            <Typography variant="body2" color="white">
              Email: info@Armadai.com
            </Typography>
            <Typography variant="body2" color="white">
              Phone: +27 234 567 890
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              color="#FFC107"
              gutterBottom
              textAlign="center"
            >
              Follow Us
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Link
                href="https://www.facebook.com/"
                color="inherit"
                target="_blank" // Add this line
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mx: 2,
                  "&:hover svg": {
                    color: "#FFC107",
                  },
                  "@media (max-width: 960px)": {
                    mx: 0,
                  },
                }}
              >
                <Facebook sx={{ color: "white" }} />
              </Link>
              <Link
                href="https://www.instagram.com/armadia.for.constractins "
                color="inherit"
                target="_blank" // Add this line
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mx: 2,
                  "&:hover svg": {
                    color: "#FFC107",
                  },
                  "@media (max-width: 960px)": {
                    mx: 0,
                  },
                }}
              >
                <Instagram sx={{ color: "white" }} />
              </Link>
              <Link
                href="https://www.twitter.com/"
                color="inherit"
                target="_blank" // Add this line
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mx: 2,
                  "&:hover svg": {
                    color: "#FFC107",
                  },
                  "@media (max-width: 960px)": {
                    mx: 0,
                  },
                }}
              >
                <Twitter sx={{ color: "white" }} />
              </Link>
              <Link
                href="https://www.youtube.com/"
                color="inherit"
                target="_blank" // Add this line
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mx: 2,
                  "&:hover svg": {
                    color: "#FFC107",
                  },
                  "@media (max-width: 960px)": {
                    mx: 0,
                  },
                }}
              >
                <YouTube sx={{ color: "white" }} />
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="white" align="center">
            {"Copyright © "}
            <Link color="inherit" href="/" target="_blank">
              ARMADIA for Constractions
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
            <br />
            <br />
            <Link
              color="inherit"
              href="https://www.facebook.com/MuhammetShawky/"
              target="_blank"
              sx={{
                mx: 5,
              }}
            >
              By.Muhammet Shawky
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
