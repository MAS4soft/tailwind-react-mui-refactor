// src/HeroSection.tsx
import React from 'react';
import { Box, Button, Typography, Grid, useTheme } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ComputerIcon from '@mui/icons-material/Computer';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

const Sustainability: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ 
          position: 'relative', 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(src/assets/cons06.jpg)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          padding: theme.spacing(4), 
          color: 'white' 
        }}>
          <Box sx={{ padding: theme.spacing(4) }}>
            <Typography variant="h6" color="yellow">
              Sustainability
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: theme.spacing(2) }}>
              Committed To Keep People Healthy & Safe
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: theme.spacing(4) }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus.
            </Typography>
            <Button variant="contained" sx={{ backgroundColor: '#FFC107', color: 'black' }}>
              GET IN TOUCH
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ 
          backgroundColor: 'rgba(255, 193, 7, 0.9)', 
          padding: theme.spacing(4) 
        }}>
          <Box sx={{ padding: theme.spacing(4) }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: theme.spacing(2) }}>
              We Follow Best Practices
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: theme.spacing(4) }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus.
            </Typography>
            <Box>
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', marginBottom: theme.spacing(2) }}>
                <CheckCircleIcon sx={{ marginRight: theme.spacing(1) }} /> Sustainability
              </Typography>
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', marginBottom: theme.spacing(2) }}>
                <AccessTimeIcon sx={{ marginRight: theme.spacing(1) }} /> Project On Time
              </Typography>
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', marginBottom: theme.spacing(2) }}>
                <ComputerIcon sx={{ marginRight: theme.spacing(1) }} /> Modern Technology
              </Typography>
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', marginBottom: theme.spacing(2) }}>
                <DesignServicesIcon sx={{ marginRight: theme.spacing(1) }} /> Latest Designs
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Sustainability;
