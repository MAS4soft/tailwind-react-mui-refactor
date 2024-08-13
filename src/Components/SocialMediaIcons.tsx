// src/Components/SocialMediaIcons.tsx

import React from "react";
import SocialMediaLink from "./SocialMediaLink";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import { Box, useTheme } from "@mui/material";

const socialMediaLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=61564297616824",
    icon: <FacebookIcon />,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/armadia.for.constractins",
    icon: <InstagramIcon />,
    label: "Instagram",
  },
  { href: "https://x.com", icon: <XIcon />, label: "X" },
  { href: "https://www.youtube.com", icon: <YouTubeIcon />, label: "YouTube" },
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
          color: theme.palette.primary.main ,
          "&:hover": {
            color: theme.palette.common.white, // Apply hover color
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
