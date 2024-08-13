import { Link, useLocation } from "react-router-dom";
import SocialMediaIcons from "./SocialMediaIcons";
import { useState } from "react";
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, styled, Toolbar, Typography, useTheme } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

const pages = ["Home", "Services", "Projects", "About", "Contact Us"];

const Logo = styled("img")(({ theme }) => ({
  height: 40,
  display: "block",
  transition: "color 0.3s",
  [theme.breakpoints.down("md")]: {
    height: 30,
  },
  "&:hover": {
    color: theme.palette.warning.main, // Apply hover color
  },
}));

function ResponsiveAppBar() {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(
    null
  );
  const location = useLocation();
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
        py: 0.5,
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <Logo
              src="src\assets\logo.jpg"
              alt="Company Logo"
              sx={{ mr: 2 }}
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
                color: theme.palette.primary.main,
                textDecoration: "none",
                pr: 4,
                "&:hover": {
                  color: theme.palette.common.white, 
                },
              }}
            >
              ARMADIA   
            </Typography>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              justifyContent: "flex-end", // Align to the right for mobile view
            }}
          >
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
                color: theme.palette.primary.main,
                "&:hover": {
                  color: theme.palette.common.white, // Apply hover color
                },
                textDecoration: "none",
                ml: 2,
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
              sx={{
                ml: "auto",
                color: { xs: "white", md: "inherit" },
                "&:hover": {
                  color: theme.palette.primary.main, // Apply hover color
                },
              }}
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
                    backgroundColor: theme.palette.primary.main,
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

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "flex-start", // Align to the right
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color:
                    currentPath === `/${page.toLowerCase().replace(/\s+/g, "")}`
                      ? theme.palette.common.white
                      : theme.palette.primary.main,
                  display: "block",
                  "&:hover": {
                    color: theme.palette.common.white,
                  },
                }}
                component={Link}
                to={`/${page.toLowerCase().replace(/\s+/g, "")}`}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "flex" }, // Show only on large screens
              alignItems: "center",
              ml: "auto", // Move to the right
            }}
          >
            <SocialMediaIcons />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
