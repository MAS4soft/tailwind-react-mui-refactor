// src\Components\OurClints.tsx

import { Box, Typography, Container } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Client {
  name: string;
  logo: string;
}

const clients: Client[] = [
  { name: 'test', logo: 'https://tse1.mm.bing.net/th?id=OIP.shGqLcB1YOfWp3Vv75oxSwHaF7&pid=Api&P=0&h=220' },
  { name: 'pix', logo: 'https://devtools.com.br/img/pix/logo-pix-png-930x616.png' },
  { name: 'Logoipsum', logo: 'https://t4.ftcdn.net/jpg/04/44/94/79/360_F_444947921_xhrE42lESW5y8zGJmuulfO6C4YxqfihJ.jpg' },
  { name: 'Logoipsum', logo: 'https://tse4.mm.bing.net/th?id=OIP.q_Jg0w81S5g7u_0-W8YckgHaF7&pid=Api&P=0&h=220' },
  { name: 'citymall', logo: 'https://tse4.mm.bing.net/th?id=OIP.jHF5sePyxcGuo4qkLKk0AgHaDt&pid=Api&P=0&h=220' },
  { name: 'Logoipsum', logo: 'https://tse4.mm.bing.net/th?id=OIP.NDUnCXsbAIK8DREMK_HMEAHaHa&pid=Api&P=0&h=220' },
  { name: 'Logoipsum', logo: 'https://tse4.mm.bing.net/th?id=OIP.sffFPxT4ouHJLPhoQGn0JAHaHa&pid=Api&P=0&h=220' },
  // Add more clients if needed
];

const OurClients: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Box mt={8} textAlign="center">
        <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ color: 'text.primary' }}>
          Trust and Worth
        </Typography>
        <Typography variant="h3" gutterBottom fontWeight="bold" >
          Our Clients
        </Typography>
        <Slider {...settings}>
          {clients.map((client, index) => (
            <Box key={index} textAlign="center" p={2}>
              <img src={client.logo} alt={client.name} style={{ height: 100, width: 'auto' }} />
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default OurClients;
