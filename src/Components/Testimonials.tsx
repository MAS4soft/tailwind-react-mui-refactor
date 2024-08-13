// src\Components\Testimonials.tsx
import React from "react";
import { Box, Grid, Typography, Avatar, useTheme } from "@mui/material";

// تعريف واجهة (interface) لكل عنصر في مصفوفة testimonials
interface Testimonial {
  role: string;
  name: string;
  image: string;
  text: string;
}

// تحديد نوع المصفوفة باستخدام الواجهة
const testimonials: Testimonial[] = [
  {
    role: "Engineering Manager",
    name: "Alice Howard",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.yukQOp6I_TD55GL94gWQLAHaJQ&pid=Api&P=0&h=220",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    role: "Interior Designer",
    name: "Nathan Marshall",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.CYt-sI4Rk88etVn0zt32PQHaLH&pid=Api&P=0&h=220",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    role: "Architect",
    name: "Ema Romero",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.3B14jhaSkOyaT4viAaRg2AHaKv&pid=Api&P=0&h=220",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    role: "Manager",
    name: "Ann Smith",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.qJ8f_Fjr_tnBeNvLMxh7MwHaJQ&pid=Api&P=0&h=220",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
];

const Testimonials: React.FC = () => {
  const theme = useTheme(); // استخدام القيم من theme

  return (
    <Box
      sx={{
        padding: "2rem",
        textAlign: "center",
        maxWidth: { xs: "100%", lg: "1200px", xl: "1200px" },
        mx: "auto", // لتوسيط الـ Box
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: theme.palette.secondary.main }}
      >
        What Our Clients Say
      </Typography>
      <Typography
        variant="h3"
        gutterBottom
        sx={{ color: theme.palette.primary.main }}
      >
        Testimonials
      </Typography>
      <Grid container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Box
              sx={{
                padding: "2rem",
                backgroundColor: "#1e2949",
                color: "#fff",
                borderRadius: "0px",
                position: "relative",
              }}
            >
              <Avatar
                src={testimonial.image}
                alt={testimonial.name}
                sx={{ width: 56, height: 56, marginBottom: "1rem" }}
              />
              <Typography
                variant="h6"
                sx={{ color: theme.palette.primary.main }}
              >
                {testimonial.role}
              </Typography>
              <Typography variant="h5" gutterBottom>
                {testimonial.name}
              </Typography>
              <Typography>{testimonial.text}</Typography>
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "8px",
                  backgroundColor: theme.palette.primary.main,
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
