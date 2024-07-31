import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { Link, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { styled } from '@mui/material/styles';

const pages = ["Home", "Services", "Projects", "About", "Contact Us"];

// Styled component for the logo image
const Logo = styled('img')(({ theme }) => ({
  height: 40, // Adjust the height as needed
  display: 'block',
  [theme.breakpoints.down('md')]: {
    height: 30, // Adjust for smaller screens if needed
  }
}));

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const location = useLocation(); // Get current route
  const currentPath = location.pathname;

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar 
      position="fixed"
      sx={{        
        backgroundColor: "rgba(0, 0, 0, 0.5)", 
        boxShadow: "none", 
        py: .5,
        top: 0, // Ensure it is fixed at the top
        left: 0, // Ensure it spans full width
        right: 0, // Ensure it spans full width
      }}
    >
      <Container>
        <Toolbar disableGutters>
          {/* Logo and company name for larger screens */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: 'center' }}>
            <Logo
              src="https://img.freepik.com/free-vector/flat-design-construction-company-logo_23-2150051906.jpg"
              alt="Company Logo"
              sx={{ mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              ARMADIA
            </Typography>
          </Box>

          {/* Logo and menu button for smaller screens */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, alignItems: 'center' }}>
            <Logo
              src="https://img.freepik.com/free-vector/flat-design-construction-company-logo_23-2150051906.jpg"
              alt="Company Logo"
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                ml: 2, // Space between logo and text
              }}
            >
              ARMADIA
            </Typography>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ ml: 'auto' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiMenuItem-root": {
                  "&:hover": {
                    backgroundColor: "#FFD700",
                    color: "#000",
                  },
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      to={`/${page.toLowerCase().replace(/\s+/g, "")}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Buttons for larger screens */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: currentPath === `/${page.toLowerCase().replace(/\s+/g, "")}` ? '#FFD700' : 'white',
                  display: "block",
                  "&:hover": {
                    color: "#FFD700",
                  },
                }}
                component={Link}
                to={`/${page.toLowerCase().replace(/\s+/g, "")}`}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Social Media Icons */}
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <Tooltip title="Facebook">
              <IconButton
                href="https://www.facebook.com" // Replace with your Facebook link
                target="_blank"
                rel="noopener noreferrer"
                sx={{ p: 0, mx: 1 }} // Added margin
              >
                <FacebookIcon sx={{ color: '#fff', "&:hover": { color: '#FFD700' } }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Instagram">
              <IconButton
                href="https://www.instagram.com/armadia.for.constractins " // Replace with your Instagram link
                target="_blank"
                rel="noopener noreferrer"
                sx={{ p: 0, mx: 1 }} // Added margin
              >
                <InstagramIcon sx={{ color: '#fff', "&:hover": { color: '#FFD700' } }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Twitter">
              <IconButton
                href="https://www.twitter.com" // Replace with your Twitter link
                target="_blank"
                rel="noopener noreferrer"
                sx={{ p: 0, mx: 1 }} // Added margin
              >
                <TwitterIcon sx={{ color: '#fff', "&:hover": { color: '#FFD700' } }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="YouTube">
              <IconButton
                href="https://www.youtube.com" // Replace with your YouTube link
                target="_blank"
                rel="noopener noreferrer"
                sx={{ p: 0, mx: 1 }} // Added margin
              >
                <YouTubeIcon sx={{ color: '#fff', "&:hover": { color: '#FFD700' } }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
