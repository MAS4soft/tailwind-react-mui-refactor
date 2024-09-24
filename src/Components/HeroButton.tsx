// HeroButton.tsx
import { Button } from "@mui/material";

interface HeroButtonProps {
  label: string;
  variant: "contained" | "outlined";
  onClick: () => void;
  bgColor?: string;
  textColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  borderColor?: string;
}

const HeroButton: React.FC<HeroButtonProps> = ({
  label,
  variant,
  onClick,
  bgColor = "#FFC107",
  textColor = "#000",
  hoverBgColor = "#FFEA00",
  hoverTextColor = "#000",
  borderColor = "#FFF",
}) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      sx={{
        bgcolor: variant === "contained" ? bgColor : "transparent",
        color: textColor,
        border: variant === "outlined" ? `2px solid ${borderColor}` : "none",
        fontSize: {
          xs: "0.875rem", // Small screens
          sm: "1.2rem",   // Medium screens and up
        },
        padding: {
          xs: "0.5rem 1rem",    // Small screens
          sm: "0.75rem 1.5rem", // Medium screens and up
        },
        borderRadius: "0",
        "&:hover": {
          bgcolor: hoverBgColor,
          color: hoverTextColor,
          border: variant === "outlined" ? `2px solid ${hoverTextColor}` : "none",
        },
      }}
    >
      {label}
    </Button>
  );
};

export default HeroButton;
