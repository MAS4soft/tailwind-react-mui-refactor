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
import AdbIcon from "@mui/icons-material/Adb";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

const pages = ["Home", "Services", "Projects", "About", "Contact Us"];

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
      sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
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
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
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

          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
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
                href="https://www.instagram.com" // Replace with your Instagram link
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
