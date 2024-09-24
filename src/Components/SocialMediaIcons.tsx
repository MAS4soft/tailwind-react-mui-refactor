// src/Components/SocialMediaIcons.tsx

import React from "react";
import SocialMediaLink from "./SocialMediaLink";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, useTheme } from "@mui/material";

const socialMediaLinks = [
  {
    href: "https://www.facebook.com/armadia.co.za",
    icon: <FacebookIcon />,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/armadia.co.za",
    icon: <InstagramIcon />,
    label: "Instagram",
  },
  { href: "https://www.linkedin.com/company/armadiaza/", icon: <LinkedInIcon />, label: "LinkedIn" },
  { href: "https://www.youtube.com/@armadiaza", icon: <YouTubeIcon />, label: "YouTube" },
];

const SocialMediaIcons: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& .MuiSvgIcon-root": {
          color: theme.palette.common.white ,
          "&:hover": {
            color: theme.palette.primary.main , // Apply hover color
          },
        },
      }}
    >
      {socialMediaLinks.map((link) => (
        <SocialMediaLink key={link.label} {...link} />
      ))}
    </Box>
  );
};

export default SocialMediaIcons;
