import {
  Grid,
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import service01 from "../assets/service01.jpg";
import service02 from "../assets/service02.jpg";
import service03 from "../assets/service03.jpg";
import service04 from "../assets/service04.jpg";
import service05 from "../assets/service05.jpg";
import service06 from "../assets/service06.jpg";

const AllServices = () => {
  const services = [
    {
      id: 1,
      image: service01,
      title: "Land Minning",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      image: service02,
      title: "Building Staffs",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      image: service03,
      title: "Material Supply",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      image: service04,
      title: "Conslutancy",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 5,
      image: service05,
      title: "Architecture",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 6,
      image: service06,
      title: "Crane Service",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" align="left" gutterBottom sx={{ color: '#232837' }}>
        Build Your Dream
      </Typography>
      <Typography variant="h3" align="left" gutterBottom sx={{ color: '#232837' , fontWeight: 'bold' }}>
        Quality Services
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {services.map((service) => (
          <Grid item key={service.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardMedia
                component="img"
                image={service.image}
                alt={service.title}
                sx={{ height: 300, objectFit: "cover" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllServices;
