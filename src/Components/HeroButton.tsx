// src/Components/HeroButton.tsx

import { Button, useTheme } from "@mui/material";

interface HeroButtonProps {
  variant: "contained" | "outlined";
  onClick: () => void;
  label: string;
}

const HeroButton: React.FC<HeroButtonProps> = ({ variant, onClick, label }) => {
  const theme = useTheme();

  return (
    <Button
      variant={variant}
      sx={{
        bgcolor: variant === "contained" ? theme.palette.primary.main : "transparent",
        color: variant === "contained" ? theme.palette.background.default : theme.palette.text.secondary,
        border: variant === "outlined" ? `.5px solid ${theme.palette.text.secondary}` : "none",
        fontSize: "1rem",
        padding: ".5rem 2.5rem",
        borderRadius: "0",
        "&:hover": {
          bgcolor: variant === "contained" ? theme.palette.primary.main : theme.palette.primary.main,
          color: variant === "outlined" ? theme.palette.background.default : undefined,
          border: variant === "outlined" ? `.5px solid ${theme.palette.background.default}` : "none",
        },
      }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default HeroButton;
