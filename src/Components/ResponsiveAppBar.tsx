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

interface LogoTitleProps {
  src: string;
  alt: string;
}

const LogoTitle: React.FC<LogoTitleProps> = ({ src, alt }) => {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Logo src={src} alt={alt} sx={{ mr: .5 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".2rem",
          color: theme.palette.common.white,
          textDecoration: "none",
          "&:hover": {
            color: theme.palette.primary.main, 
          },
        }}
      >
        ARMADIA
      </Typography>
    </Box>
  );
};

function ResponsiveAppBar() {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const location = useLocation();
  const currentPath = location.pathname;

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const renderMenuItems = () => {
    return pages.map((page) => (
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
    ));
  };

  const renderButtons = () => {
    return pages.map((page) => (
      <Button
        key={page}
        onClick={handleCloseNavMenu}
        sx={{
          my: 1,
          color:
            currentPath === `/${page.toLowerCase().replace(/\s+/g, "")}`
              ? theme.palette.primary.main
              : theme.palette.common.white,
          display: "block",
          "&:hover": {
            color: theme.palette.primary.main,
          },
        }}
        component={Link}
        to={`/${page.toLowerCase().replace(/\s+/g, "")}`}
      >
        {page}
      </Button>
    ));
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgba(30, 41, 73, 0.5)",
        boxShadow: "none",
        py: 0.5,
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <Container>
        <Toolbar disableGutters>
          {/* Desktop View */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            <LogoTitle src="src/assets/logo.png" alt="Company Logo" />
          </Box>

          {/* Mobile View */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <LogoTitle src="src/assets/logo.png" alt="Company Logo" />
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
                  color: theme.palette.primary.main,
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
              {renderMenuItems()}
            </Menu>
          </Box>

          {/* Desktop Buttons */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {renderButtons()}
          </Box>

          {/* Social Media Icons */}
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
              alignItems: "center",
              ml: "auto",
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
