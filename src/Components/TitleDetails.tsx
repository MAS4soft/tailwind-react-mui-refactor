// src/Components/TitleDetails.tsx

import { Box, Typography } from "@mui/material";

interface TitleDetailsProps {
  title: string;
  subtitle: string;
}

const TitleDetails: React.FC<TitleDetailsProps> = ({ title, subtitle }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      mb={4}
      pt={8}
    >
      <Typography 
        variant="h5" 
        gutterBottom 
        sx={{ color: "primary.main", fontSize: { xs: '1.5rem', sm: '2.5rem', xl: '4rem' } }} // Responsive font size
      >
        {title}
      </Typography>
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ fontWeight: "bold", fontSize: { xs: '2.25rem', sm: '3.5rem' , xl: ' 6rem' } }} // Responsive font size
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default TitleDetails;
