import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';

interface Client {
  name: string;
  logo: string;
}

const clients: Client[] = [
  { name: 'Logoipsum', logo: 'logo1.png' },
  { name: 'Logoipsum', logo: 'logo2.png' },
  { name: 'Logoipsum', logo: 'logo3.png' },
  { name: 'Logoipsum', logo: 'logo4.png' },
  // أضف المزيد من العملاء إذا لزم الأمر، ولكن نعرض فقط 4 في هذه الحالة
];

const OurClients: React.FC = () => {
  return (
    <Container>
      <Box mt={8} textAlign="center">
        <Typography variant="h4" gutterBottom>
          Trust and Worth
        </Typography>
        <Typography variant="h5" gutterBottom>
          Our Clients
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {clients.map((client, index) => (
            <Grid item key={index} xs={12} sm={6} md={3} textAlign="center">
              <img src={client.logo} alt={client.name} style={{ height: 50, width: 'auto' }} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default OurClients;
