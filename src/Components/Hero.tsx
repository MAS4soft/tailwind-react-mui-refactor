import { Typography, Button } from '@mui/material';
import backgroundImage from '../assets/cover.jpg'; // Adjust the path relative to your project

const Hero = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderBottom: '2px solid #333',
        padding: '2rem',
        backgroundImage: `linear-gradient(rgba(0, 0, 1, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`, // Combine gradient and image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#fff',
      }}
    >
      <div style={{ paddingTop: '4rem' }}> {/* Increased top padding */}
        <Typography
          variant="h1"
          style={{
            fontSize: '3.5rem', // Adjusted font size
            fontWeight: 'bold',
            color: '#FFD700',
            marginBottom: '1rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)', // Added text shadow
          }}
        >
          Build Your Dream
        </Typography>
        <Typography
          variant="h2"
          style={{
            fontSize: '5rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem', // Adjusted bottom margin
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)', // Added text shadow
          }}
        >
          Vision Got Larger
        </Typography>
      </div>
      <Typography variant="body1" style={{ width: '70%', marginBottom: '2rem', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
        {/* Adjusted width and added text shadow */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor
        accumsan tincidunt. Donec rutrum congue leo eget malesuada. Nulla
        porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada.
        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
      </Typography>
      <div style={{ display: 'flex', gap: '1.5rem', paddingTop: '2rem' }}> {/* Adjusted padding top */}
        <Button
          variant="contained" // Changed to contained for filled button
          sx={{
            bgcolor: '#FFD700', // Yellow background color
            color: '#000',
            '&:hover': {
              bgcolor: '#FFEA00', // Lighter yellow on hover
            },
          }}
        >
          Our Services
        </Button>
        <Button
          variant="outlined" // Outlined button
          sx={{
            bgcolor: 'transparent',
            color: '#FFF',
            border: '2px solid #FFF',
            '&:hover': {
              bgcolor: '#FFF',
              color: '#000',
              border: '2px solid #000',
            },
          }}
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default Hero;
