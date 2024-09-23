// src/Components/AllServices.tsx

import {
  Grid,
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography 
} from "@mui/material";
import { services } from "./servicesData"; // Import the service data
import TitleDetails from "./TitleDetails"; // Import TitleDetails component

const AllServices = () => {
  return (
    <Container >
      <TitleDetails 
        title="Build Your Dream"  
        subtitle="Quality Services"  
      />
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
