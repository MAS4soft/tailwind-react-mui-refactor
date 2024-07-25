import React from 'react';
import { Box, Grid, Typography, Avatar } from '@mui/material';

const testimonials = [
  {
    role: 'Engineering Manager',
    name: 'Alice Howard',
    image: 'path/to/image1.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
  {
    role: 'Interior Designer',
    name: 'Nathan Marshall',
    image: 'path/to/image2.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
  {
    role: 'Architect',
    name: 'Ema Romero',
    image: 'path/to/image3.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
  {
    role: 'Manager',
    name: 'Ann Smith',
    image: 'path/to/image4.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
];

const Testimonials: React.FC = () => {
  return (
    <Box sx={{ padding: '2rem', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        What Our Clients Say
      </Typography>
      <Typography variant="h3" gutterBottom>
        Testimonials
      </Typography>
      <Grid container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Box sx={{ padding: '2rem', backgroundColor: '#1e2949', color: '#fff', borderRadius: '8px' }}>
              <Avatar
                src={testimonial.image}
                alt={testimonial.name}
                sx={{ width: 56, height: 56, marginBottom: '1rem' }}
              />
              <Typography variant="h6" sx={{ color: '#ffb400' }}>
                {testimonial.role}
              </Typography>
              <Typography variant="h5" gutterBottom>
                {testimonial.name}
              </Typography>
              <Typography>
                {testimonial.text}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
