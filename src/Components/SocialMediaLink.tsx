// src/Components/SocialMediaLink.tsx

import React from "react";
import { useTheme } from "@mui/material/styles";
import { Link, SvgIconProps } from "@mui/material";

interface SocialMediaLinkProps {
  href: string;
  icon: React.ReactElement<SvgIconProps>;
  label: string;
}

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({
  href,
  icon,
  label,
}) => {
  const theme = useTheme();

  return (
    <Link
      href={href}
      aria-label={label}
      color="inherit"
      target="_blank" // Open in new tab
      rel="noopener noreferrer" // Security measure
      sx={{ mx: 1 }}
    >
      {React.cloneElement(icon, {
        sx: { color: theme.palette.text.secondary },
      })}
    </Link>
  );
};

export default SocialMediaLink;
