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
      title: "Residential Construction",
      description:
        "Designing and building homes and villas from start to finish, with quality assurance and adherence to engineering standards.",
    },
    {
      id: 2,
      image: service02,
      title: "Commercial Construction",
      description:
        "Creating commercial buildings such as offices, retail stores, malls, and warehouses.",
    },
    {
      id: 3,
      image: service03,
      title: "Renovations and Modifications",
      description:
        "Renovating and modifying existing buildings, whether residential or commercial, to meet current client needs.",
    },
    {
      id: 4,
      image: service04,
      title: "Interior and Exterior Decorations",
      description:
        "Designing and implementing interior and exterior decorations, including flooring, ceilings, and walls with high-quality materials.",
    },
    {
      id: 5,
      image: service05,
      title: "Green Spaces and Urban Landscaping",
      description: "Creating gardens, landscaping, and urban areas around buildings.",
    },
    
    {
      id: 6,
      image: service06,
      title: "Historical Restorations",
      description: "Restoring historical buildings while preserving their original architectural character.",
    },
  ];

  return (
    <Container sx={{ py: 8 }}>
      <Typography
        variant="h4"
        align="left"
        gutterBottom
        sx={{ color: "text.primary" }}
      >
        Build Your Dream
      </Typography>
      <Typography
        variant="h3"
        align="left"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
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
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  sx={{ fontWeight: "bold" }}
                >
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "black" }}>
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
